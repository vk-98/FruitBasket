import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.css";

class App extends Component {
  
  render(){
  return (
      <Router>
        <div className="App">
          <h1 className="red lighten-2 white-text center">Fruit Basket</h1>
          <div className="container">
          
            <Route exact path="/" component={Login}/>
            <Route exact path="/dashboard/" component={Dashboard}/>
            
          </div>
        </div>
      </Router>
  );
  }
}

export default App;
