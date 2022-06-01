import React, { Component } from 'react';
import Greeting from './Greeting';
import Logaut from './Logout';
import Login from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  // render() {
  //   let button;

  //   if (this.state.isLoggedIn) {
  //     button = <button onClick={this.handleLogout}>Logout</button>;
  //   } else {
  //     button = <button onClick={this.handleLogin}>Login</button>;
  //   }
  //   render() {
  //     const button = this.state.isLoggedIn ? (
  //       <button onClick={this.handleLogout}>Logout</button>
  //     ) : (
  //       <button onClick={this.handleLogin}>Login</button>
  //     );
  //
  //     return (
  //       <div className="pannel">
  //         <Greeting isLoggedIn={this.state.isLoggedIn} />
  //         <div>{button}</div>
  //       </div>
  //     );
  //   }
  // }
  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logaut onLogaut={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
