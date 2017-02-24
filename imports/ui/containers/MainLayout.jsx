import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Main from '../pages/Main.jsx';
import Leaderboard from '../pages/Leaderboard.jsx';
import NotFound from '../pages/NotFound.jsx';
import Tasks from '../pages/Tasks.jsx'

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path = '/leaderboard' component={Leaderboard} />
              <Route path = '/tasks' component={Tasks} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}
