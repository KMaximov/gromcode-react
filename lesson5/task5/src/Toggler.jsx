// створити класову компоненту, добавити статус в стейт (при кліку змінювати статус та в залежності від статуса змінювати текст)
import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleStatus: true,
    };
  }
  handleCLick = () => {
    this.setState(state => ({
      isToggleStatus: !state.isToggleStatus
    }))
  }

  render() {
    return <button className="toggler" onClick={this.handleCLick}>{this.state.isToggleStatus ? 'Off' : 'On'}</button>
  }
}
export default Toggler;