import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import MovieByID from "./MovieByID";
import PostReview from "./PostReview";

class Main extends Component {

  render() {
    return (
      <HashRouter>
      <nav class="navbar navbar-inverse" >
        <div class="container-fluid">
        <div class="navbar-header" >
            <a class="navbar-brand" href="#" width="100%">Picture Perfect</a>
        </div>
        <ul class="nav navbar-nav">
        <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Movies</NavLink></li>
            <li><NavLink to="/home">TV Shows</NavLink></li>
            <li><NavLink to="/contact">Book Tickets</NavLink></li>
        </ul>
        </ul>
        <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="form-group">
            <input type="text" class="form-control" placeholder="Search Movies, Shows..." name="search"  />
            </div>
            <button type="submit" class="btn btn-default">Go!</button>
        </form>
        <ul class="nav navbar-nav">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
        </div>
      </nav> 
      <div align="center" height="50%">
      <Carousel className="carousel-style" showThumbs={false}  showStatus={false} infiniteLoop width="50%" autoPlay interval={3000} infiniteLoop>
                <div className="slider-item-div">
                    <img src="car1.jpg" width="10%" height="50%" />
                    <p className="legend">Movie Title 1</p>
                </div>
                <div className="slider-item-div">
                    <img src="car2.jpg" width="10%" height="50%" />
                    <p className="legend">Movie Title 2</p>
                </div>
                <div className="slider-item-div">
                    <img src="car3.jpg" width="10%" height="50%"/>
                    <p className="legend">Movie Title 3</p>
                </div>
                <div className="slider-item-div">
                    <img src="car4.jpg" width="10%" height="50%"/>
                    <p className="legend">Movie Title 3</p>
                </div>
                <div className="slider-item-div">
                    <img src="car5.jpg" width="10%" height="50%"/>
                    <p className="legend">Movie Title 3</p>
                </div>
            </Carousel>
            </div>

           
        <div class="wrap">
        <div class="sidenav-left">
          <ul>
            <li><h4>Filter</h4></li>
            <li><h4>Language</h4></li>
            <li><h4>Avg Rating</h4></li>
            
          </ul>
        </div>
        <div className="content">
          <switch>
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>  
            
            <Route path="/moviebyid/:movieId" component={MovieByID} />
            <Route path="/postreview" component={PostReview}/> 
            </switch>
         </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main; 