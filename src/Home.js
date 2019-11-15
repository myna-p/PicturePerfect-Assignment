import React, { Component } from "react"; 
import PostMovies from "./postMovies.js";

class Home extends Component {
  render() {
    return (
      <div class='content'>
      <h1>Movies</h1>
      <PostMovies />
      </div>
      
    );
  }
}
 
export default Home;
