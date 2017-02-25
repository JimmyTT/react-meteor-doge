import React from 'react';
import Timer from 'react-timer'

export default class MTimer extends React.Component {

  // const OPTIONS = { }
  // TODO user needs to set the timer 

  render () {
    return (
      <div className="card">
        <Timer options="delay: 100"/>
      </div>
    );
  }

}
