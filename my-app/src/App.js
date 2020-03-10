//1 make sure i have all dependencies and the app planned
// that makes it so i can import everything right off the bat 
import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
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

// below In my component DidMount I am going to access the github api using an axios call
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


// I am going to make a second axios call now to pull the information for the followers data
// after seeing the console log i see that it is goign to send me back an array of follower sso all i ahve to do is set the 
// state of followers to the response it recieves back since i intialized as an empty array to begin with
// added the same .catch for the error so that you get a console log of whats going on 
axios
  .get('https://api.github.com/users/followers')
  .then(res => {
    // console.log(res.data)
    this.setState({
      followers: res.data
    })
  })
  .catch(err => console.log(err));
}

render(){
// returning the usercard in the main container div I then set the key to the user id since they are all uniqure and i set the id to the id of course
// I  then set the avatar to the avatar_url becuase thats what is returning th eurl to the users image in the response form the api ping
// I am now going to try and create a div and map through the follower array and display a div for each unique id it maps through
// I am then going to tuse the login and avatarurl data points to get the username and image for each of the followers cards.
 return (
  <div className="main-container">
    <div>
     <UserCard
     key={this.state.user.id}
     id={this.state.user.id}
     avatar={this.state.user.avatar_url}
     name={this.state.user.login}
     />
   </div>
   <h2>Followers</h2>
      {this.state.followers.map(follower => {
     return (
      <div key={follower.id}>
        <h3>Username: {follower.login}</h3>
        <img src={follower.avatar_url} alt='followers photo here'/>  
      </div>
     )
   })}
  </div>
    );
  }
}
export default App;
