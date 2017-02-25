import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import You from '../pages/You.jsx';
import Leaderboard from '../pages/Leaderboard.jsx';
import NotFound from '../pages/NotFound.jsx';
import Tasks from '../pages/Tasks.jsx'
import Pomodoro from '../pages/MainPomodoro.jsx'

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={You} />
              <Route path = '/leaderboard' component={Leaderboard} />
              <Route path = '/tasks' component={Tasks} />
              <Route path = '/mainpomodoro' component={Pomodoro}/>
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}

//    <Route path = '/start' component={MainTimer} />
