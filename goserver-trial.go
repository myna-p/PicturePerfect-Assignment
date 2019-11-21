package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

type MovieList struct {
	MovieID   int    `gorm:"primary_key" json:"movie_id"`
	Title     string `json:"title"`
	Genre     string `json:"genre"`
	ImgSource string `json:"img_source"`
	Summary   string `json:"summary"`
}

type MovieShow struct {
	ShowID       int       `gorm:"primary_key" json:"show_id"`
	TotalTickets string    `json:"total_tickets"`
	MovieID      int       `json:"movie_id"`
	Movie        MovieList `gorm:"foreignkey:movie_id;association_foreignkey:movie_id"`
}

type MovieReviews struct {
	ReviewID   int       `gorm:"primary_key" json:"review_id"` 
	MovieID    int       `json:"movie_id"`
	UserID     int       `json:"user_id"`
	ReviewDate string    `json:"review_date"`
	Rating     float64   `json:"rating"`
	Content    string    `json:"content"`
	Movie      MovieList `gorm:"foreignkey:movie_id;association_foreignkey:movie_id"`
}

type Handler struct {
	DB *gorm.DB
}

func main() {
	r := setupRouter()
	r.Run()
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())
	h := Handler{}
	h.Initialize()
	r.GET("/movieReviews", h.getAllReviews)        //All reviews -> not used
	r.GET("/movieShow", h.getAllShows)             //All movie screenings -> not used yet
	r.GET("/movie", h.getAllMovies)                //List of all movies -> front page
	r.GET("/movieShow/:id", h.getMovieShowById)    //Movie screening based on id -> not used yet
	r.GET("/moviebyid/:id", h.getSingularMovie)    //Displaying complete movie details -> on clicking a poster in front page
	r.GET("/movieReviews/:id", h.getReviewByMovie) //Displaying reviews of a particular movie -> on clicking a poster in front page

	r.POST("/movieReview", h.insertReview) //Posting a user review for a movie

	return r
}

func (h *Handler) Initialize() {
	db, err := gorm.Open("mysql", "root:tiger@/picturePerfect?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		log.Fatal(err)
	}

	db.SingularTable(true)
	db.AutoMigrate(&MovieList{}, &MovieShow{}, &MovieReviews{})
	db.Model(&MovieList{})
	db.Model(&MovieShow{}).AddForeignKey("movie_id", "movie_list(movie_id)", "CASCADE", "CASCADE")
	db.Model(&MovieReviews{}).AddForeignKey("movie_id", "movie_list(movie_id)", "CASCADE", "CASCADE")

	h.DB = db
}

//Getting all entries from movie_show table --(Not used yet)
func (h *Handler) getAllShows(c *gin.Context) {
	var shows []MovieShow
	h.DB.Find(&shows)
	c.JSON(http.StatusOK, shows)
}

//Getting all entries from movie_reviews table --(Not used)
func (h *Handler) getAllReviews(c *gin.Context) {
	var revs []MovieReviews
	h.DB.Find(&revs)
	c.JSON(http.StatusOK, revs)
}

//Populating the complete list of movies
func (h *Handler) getAllMovies(c *gin.Context) {
	var lists []MovieList
	h.DB.Find(&lists)
	c.JSON(http.StatusOK, lists)
}

//Movie screening based on id -> not used yet
func (h *Handler) getMovieShowById(c *gin.Context) {
	id := c.Param("id")
	var major MovieShow

	if err := h.DB.Find(&major, id).Error; err != nil {
		c.Status(http.StatusNotFound)
		return
	}
	c.JSON(http.StatusOK, major)
}

//Getting movie details of a movie based on movie_id
func (h *Handler) getSingularMovie(c *gin.Context) {
	id := c.Param("id")
	var movie MovieList

	if err := h.DB.Find(&movie, id).Error; err != nil {
		c.Status(http.StatusNotFound)
		return
	}
	c.JSON(http.StatusOK, movie)
}

//Getting Review based on movie_id
func (h *Handler) getReviewByMovie(c *gin.Context) {
	var review []MovieReviews
	id := c.Param("id")
	if err := h.DB.Joins("JOIN movie_list on movie_reviews.movie_id = movie_list.movie_id ").Preload("Movie").Where("movie_reviews.movie_id = ?", id).Find(&review).Error; err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, review)
	}
}

//Inserting User Review
func (h *Handler) insertReview(c *gin.Context) {
	var review MovieReviews
	if err := c.ShouldBindJSON(&review); err != nil {
		c.Status(http.StatusBadRequest)
		return
	}

	if err := h.DB.Save(&review).Error; err != nil {
		c.Status(http.StatusInternalServerError)
		return
	}
	c.JSON(http.StatusOK, review)
}

//Getting movie_id of a movie for inserting review
