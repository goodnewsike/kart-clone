import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
