import React from 'react';

export default class Task extends React.Component {
	//TODO button onclick --> Timer 

  render () {
    return (
      <div className="card orange single-task">
        <div className="card-content white-text">
            <span className="card-title">JS: this.props.task-name</span>
              <div className="task-info">
                 <p>JS: this.props.task-time </p>
                 <p>JS: this.props.task-exp-gain </p>
              </div>
          </div>
            <div className="card-action center">
	             <a className="btn-large purple">
			    	    <i className="small material-icons">chevron</i>
			   	    </a>
            </div>
      </div>
    );
  }

}