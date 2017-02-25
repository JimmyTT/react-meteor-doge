import React from 'react';
import UserView from './UserView.jsx'
import SortingOptions from './SortingOptions.jsx'

export default class SidebarRankView extends React.Component {

  render () {
    return (
      <div className="card side-rank-view-container">
        <div className="row">
          <UserView/>
        </div>

        <div className="row">
          <SortingOptions/>
        </div>

      </div>
    );
  }
}
