import React, {useEffect} from 'react';
import Rainbow from "../Rainbow";

let componentDidMount = function() {
  console.log('Mounted');
};

let changeToHome = function(e, props) {
  // programatic redirect
  props.history.push('/home');
};

const Contact = (props) => {
  console.log(props);
  useEffect(componentDidMount, []);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ipsam necessitatibus fugit reprehenderit tenetur animi repellendus explicabo excepturi, odit facere quibusdam amet enim magnam autem atque commodi quidem! Tenetur, eum?</p>
      <button onClick={e => changeToHome(e, props)}>home</button>
    </div>
  );
};

export default Rainbow(Contact);
