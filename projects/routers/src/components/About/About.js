import React, {useEffect} from 'react';
import Rainbow from '../Rainbow';

let componentDidMount = function() {
  console.log('Mounted');
};

let changeToHome = function(e, props) {
  // programatic redirect
  props.history.push('/home');
};

const About = (props) => {
  useEffect(componentDidMount, []);
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut necessitatibus. Voluptates veniam similique id atque doloremque ut cumque, illum pariatur soluta, ducimus quod ullam fuga molestiae vel magni facilis.</p>
      <button onClick={e => changeToHome(e, props)}>home</button>
    </div>
  );
};

export default Rainbow(About);
