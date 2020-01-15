import React, {useEffect} from 'react';
import './App.css';
import {About, Home, Contact, Navbar, Post} from "./components";
import {BrowserRouter, Route, Switch} from "react-router-dom";

let componentDidMount = function() {
  console.log('mounted');
}

function App() {
  useEffect(componentDidMount, []);
  return (
    <BrowserRouter>
      <div>
        {/* 
          but Navbar component is not called upon by the React Route tag hence props passed to Navbar component has no
          route attributes, thus if we have to programatically redirect to another page using props.history.push(),
          we have to use higher order component 
        */}
        <Navbar />

        {/* The switch tag returns only one Route at a time the best fit */}
        <Switch>
          {/* this Route tag of react adds route attributes to the props passed on to each of these components */}
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>

        {/* 
          if there were no switch tag then the BrowserRouter would have served both Contact and Post Component,
           when visiting the url='/contact' because there is no way of knowing weather /contact is not /:post_id.
           Hence we use switch tag which renders only one Route Componet at a time. the precedence is as the order they are written in
         */}
      </div>
    </BrowserRouter>
  );
}

export default App;
