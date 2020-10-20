import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <div>     
        <Switch>          
          {/* <Route path="/Demo">
            <Demo />
          </Route>
          <Route path="/Create">
            <Create />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
