//1 make sure i have all dependencies and the app planned
// that makes it so i can import everything right off the bat 
import React from 'react';
import axios from 'axios';
// import UserCard from './components/UserCard';
import './App.css';
//2 creating a class component below to hand state
// i am  going to be initailizing two state properties
// one for user which will be a string, and one for the followers
// which will be an array of the followers to display
class App extends React.Component {
 state={
  user: '',
  followers:[]
 };

// below In my cmponent DidMount I am going to access the github api using an axios call
// I plan to console log the response so that i can see the shape of the data I am recieving
// after checking the shape it is res.data  then a object containing the user data inside
// then you use a this statement to update the state of user with the response.data it is getting
// from the axios call i then set up a .catch to return a console log of any error messages that appear 
// while hadling the axios call
componentDidMount(){
  axios
    .get('https://api.github.com/users/jkuenzinger')
    // .then(res =>console.log(res))
    .then(res => {
      this.setState({
        user: res.data
      })
    })
// below i set up a .catch to return a console log of any error messages that appear while hadling the 
// axios call
      .catch(err => console.log(err.message));
}


render(){
 return (
    <div className="main-container">
     {/* <UserCard/> */}
    </div>
    );
  }
}
export default App;
