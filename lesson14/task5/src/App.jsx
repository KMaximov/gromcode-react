import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        <div className="clock">{this.state.visible && <Clock location="Riga" offset={-5} />}</div>
        <div className="clock">{this.state.visible && <Clock location="Roma" offset={3} />}</div>
        <div className="clock">{this.state.visible && <Clock location="Kyiv" offset={0} />}</div>
      </>
    );
  }
}

export default App;
