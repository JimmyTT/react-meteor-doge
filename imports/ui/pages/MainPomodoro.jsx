import React from 'react';
import classNames from 'classnames';
import MTimer from '../components/MTimer.jsx'
import TimerOpsFAB from '../components/TimerOpsFAB.jsx'
function MainPomodoro() {
  return (
    <div className='MainPomodoro container'>
     	<MTimer className='center-align'/>
     	<TimerOpsFAB className='left-align'/>
    </div>
  );
}

export default MainPomodoro;