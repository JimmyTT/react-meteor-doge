import React from 'react';
export default class UserView extends React.Component {

  render () {
    return (
      <div className="UserView">
    	<div className="userView">
	      <div className="background">
	      	background here 
	      </div>
	      <a href="#!user">img here </a>
	      <a href="#!name">
	      	<span className="name">John Doe</span>
	      </a>
	      <a href="#!email">
	     	<span className="email">jdandturk@gmail.com</span></a>
		</div>
       </div>
    );
  }
}
