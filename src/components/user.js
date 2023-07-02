import React from 'react';
import Navi from './navbar';
import FixedTermContact from './fixedTermContact';
import { Route } from 'react-router-dom';


function User(route) {
    const email = route.params;
    console.log(JSON.stringify(email));
  return (

    <div >
      <Navi/>
      <FixedTermContact email = {JSON.stringify(email)}/>
      </div>
  );
}

export default User;
