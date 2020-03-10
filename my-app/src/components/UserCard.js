import React from 'react';
// now i will create a function that takes in props from that it inherits form the App.js state that I 
//set up I am making it return a container div with the card inside giving it the key of props.id this is 
// so it inherits the props of whatever unique id it recieves After looking at the shape of the data I have
// determined that I can pull a username and picture from the data so i will start with those.
function UserCard(props){
    console.log(props)
        return(
        <div className='cardContainer'>
            <div className='cardContent' key={props.id}>
                <h2>Username: {props.name}</h2>
                <img src={props.avatar_url} alt='users picture here'/>
            </div>
        </div>
    )
}

export default UserCard;