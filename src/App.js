import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './components/homepage';
import NoteID from './components/noteid';
import './App.css';

function App() {
  return (
    <Router>
      <div class="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/NoteID">
            <NoteID />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
