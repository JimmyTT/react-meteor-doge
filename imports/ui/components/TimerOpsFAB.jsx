import React from 'react';

export default class TimerOpsFAB extends React.Component {
// TODO get icons rendering correctly in FAB
// TODO Callbacks via FABs 
  // This renders a floating action button with popup hoirizontal menu 
 
  fabPause() {
  	console.log("Pause clicked")
  }

  fabEdit() {
  	console.log("Edit clicked")	
  }

  fabDone() {
  	console.log("done clicked")
  }

  fabSettings() {
  	console.log("Settings clicked")
  }
  render () {
    return (
	    <div className="fixed-action-btn vertical">
		    <a className="btn-floating btn-large red">
		      <i className="large material-icons">schedule</i>
		    </a>
		    <ul>
		      <li>
		      	<a className="btn-floating red" onClick={this.fabPause}>
		      		<i className="material-icons">pause_circle_outline</i>
		      	</a>
		      </li>
		      <li>
		      	<a className="btn-floating yellow darken-1" onClick={this.fabEdit}>
		      		<i className="material-icons">mode_edit</i>
		      	</a>
		      </li>
		      <li>
		      	<a className="btn-floating green" onClick={this.fabDone}>
		      		<i className="material-icons">done</i>
		      	</a>
		      </li>
		      <li>
		      	<a className="btn-floating blue" onClick={this.fabSettings}>
		      		<i className="material-icons">settings</i>
		      	</a>
		      </li>
		    </ul>
		  </div>
    );
  }
}

/*
	FAB 1: PAUSE --> Pauses timer 
	FAB 2: Edit --> Changes the current title of the activity
	FAB 3: Done --> Ends timer and moves to break
	FAB 4 Settings --> Change timer color ?
*/
