import React, { Component } from "react"; 
import axios from 'axios';
class PostReview extends Component {

    //To Do: Automate the 'user_id' after implementing login functionality 
    constructor(props) {
        super(props)

        this.state = {
            review_id: '', movie_id: this.props.location.param1 , user_id: '1', review_date: '' ,rating :'', content: '', rows: ['']
        }
        console.log("about",props.location.aboutProps )
        this.handleInputChange = this.handleInputChange.bind(this);
       
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
        
    }
    handleSubmit = event => {
        alert("Review uploaded!")
        event.preventDefault();
        axios.post(`http://localhost:8080/movieReview`, {
            review_id: parseInt(this.state.review_id),
            movie_id: parseInt(this.state.movie_id),
            user_id: parseInt(this.state.user_id),
            review_date: this.state.review_date,
            rating: parseInt(this.state.rating),
            content: this.state.content

        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        console.dir(this.state);
        window.location = '/#'; //Change to correct location -> /moviebyid/:id
    }

    
    componentDidMount() {
        //Setting the review_date state variable to the current system date
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        
        that.setState({
        //Setting the value of the date time
        review_date:
        year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec, 

        });
      }
  render() {
    return (
      <div  align='center' >
        <h1>Submit Review</h1>
        <h3>Movie Title: {this.props.location.param2}</h3>
        <form onSubmit={this.handleSubmit}>
            <img src={this.props.location.param3} class='lists' />
                    <table width="50%">
                        <tbody>  
                        
                        <tr><td>Rating</td><td><input type="text" name="rating" size="80" onChange={this.handleInputChange} /></td></tr>
                        <tr><td>Comments</td><td><textarea rows="4"  type="text" name="content" size="80" height="100" onChange={this.handleInputChange} /></td></tr>
                        <tr><td colSpan="2" align="center"><button class='form1' type="submit">Add Review</button></td></tr>
                        </tbody>
                    </table>
        </form>
       </div>
    );
  }
}
 
export default PostReview;

/*Add User ID to each of the reviews after implementing login
<tr><td>user_id</td><td><input type="text" name="user_id" size="80"  onChange={this.handleInputChange} /></td></tr>
<tr><td>Movie ID</td><td><input type="text" name="movie_id" size="80" onChange={this.handleInputChange} /></td></tr>
*/
