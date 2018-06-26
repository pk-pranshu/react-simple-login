import React, { Component } from 'react';
import Clockwidget from '../components/clockwidget'
import './styles/home.css';
import Todocontainer from '../containers/todocontainer';

export default class Home extends Component {
  render() {
    return (
      <div className='homepage'>
        <div className='topbar'>
          <h1> Hi, I'm Jarvis </h1>
          <h3> Your Daily Task Manager</h3>
        </div>
      <div className='cardsparent'>
        <div className = 'leftportion'>
          <div>
            <Clockwidget />
          </div>
          <div className='card'>
            <a href="https://www.apple.com/" target="blank" title="Apple.com">
              <p className='cardtext'>Checkout Apple Products</p>
              <i className="fab fa-apple" aria-hidden='true' />
            </a>
          </div>
        </div>
        <div className='list'>
          <Todocontainer />
        </div>
      </div>
       </div>
    );
  }
}
