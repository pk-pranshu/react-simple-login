import React, { Component } from 'react';
import './styles/login.css';
import Loginform from '../components/loginform';

export default class Login extends Component {

  render() {
    return (
      <div className='loginpage'>
        <h1>Sign in to iAccount</h1>
        <Loginform />
       </div>
    );
  }
}
