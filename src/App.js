import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Aboutus from "./pages/Aboutus";
import Navigation from "./Navigation";


function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
          <Route exact path="/" render={props => (
                <>
               <h1>Home</h1>
               <p>This is my home page</p>
               </>
          )}>
         
          </Route>
          <Route path="/aboutus" component={Aboutus}>

          </Route>
      </div>
    </Router>
  );
}

export default App;
