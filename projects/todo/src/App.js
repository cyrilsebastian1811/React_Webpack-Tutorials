import React from 'react';
// import './App.css';
import {Tasks, AddTask} from './components'; 

function App() {
  return (
    <div className="container center-align">
      <h2 className="#f48fb1 pink-text lighten-3">To-Do App</h2>
      {/* <div className="divider"></div>
      <AddTask /> */}
      {/* <div className="divider"></div> */}
      <Tasks />
    </div>
  );
}

export default App;
