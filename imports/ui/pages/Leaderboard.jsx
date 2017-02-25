import React from 'react';
import RankFeed from '../components/RankFeed.jsx'
import SidebarRankView from '../components/SidebarRankView.jsx'

function Leaderboard() {
  return (
    <div className='Leaderboard'>
      <div className="row">
      	<div className='col s3'>
      	   <SidebarRankView />
      	</div>

       	<div className='col s9'>
        	<RankFeed />
      	</div>
      </div>
    </div>
  );
}

export default Leaderboard;