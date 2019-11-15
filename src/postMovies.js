import React, { Component } from 'react';
import Axios from 'axios';
import { HashRouter, Link } from 'react-router-dom';
import { Grid, Row } from 'react-material-responsive-grid';

export class PostMovies extends Component {
    constructor(props) {
        super(props)

        this.state = { rows: [] }
    }

    componentDidMount() {

        { this.getReview() }
        { this.getStudent() }
    }

    getReview = () => {
        var dataAllReview = []
        Axios.get('http://localhost:8080/movie').then(result => {
            console.log(result.data)
            result.data.forEach(item => {
                dataAllReview.push(item)
            })
            this.setState({ rows: dataAllReview })
        })
    }

    getStudent = () => {
        var dataAllStudent = []
        Axios.get('http://localhost:8080/movie').then(result => {
            console.log(result.data)
            result.data.forEach(item => {
                dataAllStudent.push(item)
            })
            this.setState({ rows: dataAllStudent })
        })
    }


    render() {
        return (
            <HashRouter>
            <div class='listmovie'> 
                    <Grid>
                    <Row between={['sm8', 'sm', 'lg']}>
                            {this.state.rows.map(item => (  
                              <tr key={item.movie_id} >
                                    <Row between={['sm8', 'sm', 'lg']}>
                                    <Link to={`/moviebyid/${item.movie_id}`}><img  src={item.img_source} class='lists'/>
                                    </Link>
                                    </Row>
                                    <Row between={['sm8', 'sm', 'lg']}>
                                    <td>{item.title}</td>
                                    </Row>
                                    < Row between={['sm8', 'sm', 'lg']}>
                                    <td> Genre :{item.genre}</td>
                                    </Row>
                              </tr>
                            ))}
                           
                    </Row>
                    </Grid>     
            </div>
            </HashRouter>
        )
    }
}

export default PostMovies





/*import React from 'react';
import PostData from './movieList.json';
import { Grid, Row, Col } from 'react-material-responsive-grid';
function PostMovies() {
  return (
    <div >
    <h1>Movies List</h1>
    {PostData.map((postDetail,index) => {
        return <Grid>
            <Row between={['sm8', 'sm', 'lg']} >
               <Col width="30%">
                  <img src={postDetail.image} height="100%" width="60%"/>
                  <Row>
                   <p>
                  <h4>{postDetail.title}</h4>
   
                  Average Rating:
                  </p>
                  </Row>
               </Col>
               <Col width="30%">
                  <img src={postDetail.image} height="100%" width="60%"/>
                  <Row>
                   <p>
                  <h4>{postDetail.title}</h4>
   
                  Average Rating:
                  </p>
                  </Row>
               </Col>

               </Row>
               </Grid>
    })}
    </div>
  );
}

export default PostMovies;

*/
