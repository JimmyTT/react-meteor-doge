import React from 'react';

export default class TimerOpsFAB extends React.Component {
// TODO get icons rendering correctly in FAB
  // This renders a floating action button with popup hoirizontal menu 
  render () {
    return (
	    <div className="fixed-action-btn vertical">
		    <a className="btn-floating btn-large red">
		      <i className="large material-icons">schedule</i>
		    </a>
		    <ul>
		      <li><a className="btn-floating red"><i className="material-icons">pause_circle_outline</i></a></li>
		      <li><a className="btn-floating yellow darken-1"><i className="material-icons">mode_edit</i></a></li>
		      <li><a className="btn-floating green"><i className="material-icons">done</i></a></li>
		      <li><a className="btn-floating blue"><i className="material-icons">settings</i></a></li>
		    </ul>
		  </div>
    );
  }

}
