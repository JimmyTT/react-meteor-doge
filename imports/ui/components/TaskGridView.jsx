import React from 'react';
import TaskRow from './TaskRow.jsx'

export default class TaskGridView extends React.Component {

  /*
	Call API --> Get list of all tasks created by users 
				 (Num Tasks /3 = Num Rows)

	Store called list of tasks into array 
	--> Partition Tasks into Arrays of three and pass as props to 
	each TaskRow Component 

  */
  render () {
    return (
      <div className="card task-view-container">
        <TaskRow />
        <TaskRow />
        <TaskRow />
      </div>
    );
  }
}
