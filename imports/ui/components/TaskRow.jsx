import React from 'react';
import Task from './Task.jsx'

export default class TaskRow extends React.Component {
   
   // TODO Pass tasks data bassed on props passed array 
  
  render () {
    return (
      <div className="row">
        <div className="col m4">
         <Task />
        </div>

        <div className="col m4">
         <Task />
        </div>

        <div className="col m4">
         <Task />
        </div>
      </div>
    );
  }

}