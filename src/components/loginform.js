import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styles/loginform.css';

class Loginform extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        password: '',
        redirect: false
      };
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // username: 'macintosh@xyz.com'
    // password: 'mojave'
    handleSubmit(e) {
      e.preventDefault()
      if (this.state.username === 'macintosh@xyz.com' && this.state.password === 'mojave') {
        this.props.history.push('/home')
      } else {
        document.getElementById('inputuser').className = 'invalidInput';
        document.getElementById('inputpass').className = 'invalidInput';
      }
    }

    handleUserChange(evt) {
      this.setState({
        username: evt.target.value,
      });
    };

    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }

    render() {
      return (
        <div className='login'>
          <div>
            <form>
              <div>
                <input type='text' ref='username'
                  placeholder='enter username'
                  id='inputuser'
                  value={this.state.username}
                  onChange={this.handleUserChange} />
              </div>
              <div>
                <input type='password' ref='password'
                  placeholder='enter password'
                  id='inputpass'
                  value={this.state.password}
                  onChange={this.handlePassChange} />
              </div>
              <div>
                <button onClick={this.handleSubmit}> Login </button>
              </div>
            </form>
         </div>
         <div className='footer'>
           <span className='copyright'>Copyright © 2018 Pranshu Kumar. All rights reserved.</span>
         </div>
       </div>
      );
  }
}

export default withRouter(Loginform)
