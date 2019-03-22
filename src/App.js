import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

import RequireAuth from './common/RequireAuth';
import IsPublic from './common/IsPublic';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={RequireAuth(Dashboard)} />
            <Route
              path="/project/:id"
              component={RequireAuth(ProjectDetails)}
            />
            <Route path="/signin" component={IsPublic(SignIn)} />
            <Route path="/signup" component={IsPublic(SignUp)} />
            <Route path="/create" component={RequireAuth(CreateProject)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
