<<<<<<< HEAD
import React, { Component } from 'react';
import Axios from 'axios';
import { Link,NavLink } from 'react-router-dom';
import PostReview from './PostReview';


export class MovieByID extends Component {
        constructor(props) {
          super(props)
          this.state = { movie: '', rows: [] }
      }
      componentDidMount() {
        { this.getMoviebyID() }
        { this.getReview() }
      }
        getMoviebyID() {
          const { match: { params } } = this.props;
          Axios.get(`http://localhost:8080/moviebyid/${params.movieId}`).then(result => {
              this.setState({ movie: result.data })
              console.log(result.data);
          })
      }

      getReview = () => {
        var dataAllReview = []
        const { match: { params } } = this.props;
        Axios.get(`http://localhost:8080/movieReviews/${params.movieId}`).then(result => {
            console.log(result.data)
            result.data.forEach(item => {
                
                dataAllReview.push(item)
            })
            this.setState({ rows: dataAllReview })
        })
    }
    render() {
        const newTo = { 
            pathname: `/postreview`, 
            param1: this.state.movie.movie_id,    // param1 -> movie_id
            param2: this.state.movie.title,     // param2 -> title of the movie
            param3: this.state.movie.img_source       
          };

        return (
            
        <div height='100%'>
            <div class="wrap" >
                <h2> MOVIE DETAILS </h2>
                        
                <div class="fleft" align='center' height='100%'>
                    <img  class='poster' src={this.state.movie.img_source} /> 
                </div>
                <div class="fright">  
                    <h2>{this.state.movie.title }</h2>
                    <p><h3> Average Rating : 4.5
                        </h3></p>
                    <p><h4> Genre : {this.state.movie.genre}
                        </h4></p>
                        
                    <p><h4> Summary: {this.state.movie.summary} </h4></p>
                </div>        
                <tr><td colSpan="2" align="center" color='white'><button class='form1' ><Link class='link' to={newTo} ><b>Leave A Review</b></Link></button></td></tr> 
            </div>
            <div>
                <center>
                    <hr />
                    <hr />
                    <h1 class='titles'>Reviews</h1>
                            <hr />
                            {this.state.rows.map(item => (
                                
                                <tr key={item.review_id}>
                                  <tr> <td>Movie ID: {item.movie_id}</td></tr> 
                                  <tr> <td>User Rating: <b>{item.rating} </b></td></tr> 
                                  <tr>  <td> <b>{item.content}</b></td></tr> 
                                    <hr/> 
                                </tr>
                                
                            ))}
                       
                </center>
            </div>
            
        </div>
        )
    }
}

export default MovieByID

/*
                <tr><td colSpan="2" align="center" color='white'><button class='form1' ><NavLink class='link' to= {`/postreview/${this.state.movie.movie_id}`} ><b>Leave A Review</b></NavLink></button></td></tr> 
*/

/*<NavLink class='link' to={ pathname : `/postreview`, aboutProps:{name : 'some data' } }> */
=======
import React, { Component } from 'react';
import Axios from 'axios';
import { Link,NavLink } from 'react-router-dom';
import PostReview from './PostReview';


export class MovieByID extends Component {
        constructor(props) {
          super(props)
          this.state = { movie: '', rows: [] }
      }
      componentDidMount() {
        { this.getMoviebyID() }
        { this.getReview() }
      }
        getMoviebyID() {
          const { match: { params } } = this.props;
          Axios.get(`http://localhost:8080/moviebyid/${params.movieId}`).then(result => {
              this.setState({ movie: result.data })
              console.log(result.data);
          })
      }

      getReview = () => {
        var dataAllReview = []
        const { match: { params } } = this.props;
        Axios.get(`http://localhost:8080/movieReviews/${params.movieId}`).then(result => {
            console.log(result.data)
            result.data.forEach(item => {
                
                dataAllReview.push(item)
            })
            this.setState({ rows: dataAllReview })
        })
    }
    render() {
        const newTo = { 
            pathname: `/postreview`, 
            param1: this.state.movie.movie_id,    // param1 -> movie_id
            param2: this.state.movie.title,     // param2 -> title of the movie
            param3: this.state.movie.img_source       
          };

        return (
            
        <div height='100%'>
            <div class="wrap" >
                <h2> MOVIE DETAILS </h2>
                        
                <div class="fleft" align='center' height='100%'>
                    <img  class='poster' src={this.state.movie.img_source} /> 
                </div>
                <div class="fright">  
                    <h2>{this.state.movie.title }</h2>
                    <p><h3> Average Rating : 4.5
                        </h3></p>
                    <p><h4> Genre : {this.state.movie.genre}
                        </h4></p>
                        
                    <p><h4> Summary: {this.state.movie.summary} </h4></p>
                </div>        
                <tr><td colSpan="2" align="center" color='white'><button class='form1' ><Link class='link' to={newTo} ><b>Leave A Review</b></Link></button></td></tr> 
            </div>
            <div>
                <center>
                    <hr />
                    <hr />
                    <h1 class='titles'>Reviews</h1>
                            <hr />
                            {this.state.rows.map(item => (
                                
                                <tr key={item.review_id}>
                                  <tr> <td>Movie ID: {item.movie_id}</td></tr> 
                                  <tr> <td>User Rating: <b>{item.rating} </b></td></tr> 
                                  <tr>  <td> <b>{item.content}</b></td></tr> 
                                    <hr/> 
                                </tr>
                                
                            ))}
                       
                </center>
            </div>
            
        </div>
        )
    }
}

export default MovieByID

/*
                <tr><td colSpan="2" align="center" color='white'><button class='form1' ><NavLink class='link' to= {`/postreview/${this.state.movie.movie_id}`} ><b>Leave A Review</b></NavLink></button></td></tr> 
*/

>>>>>>> 05005930d09261428ad888180b230f0bf3e5b93b
