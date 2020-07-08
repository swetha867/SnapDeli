import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./pages/signup";
import home from "./pages/home";
import login from "./pages/login";
import search from "./pages/search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
         <Link to="/home"> home</Link>   
         <Switch>
             <Route path="/signUp" component={Signup} />
             <Route path="/home" component={home} />
             <Route path="/login" component={login} />
             <Route path="/search" component={search} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
