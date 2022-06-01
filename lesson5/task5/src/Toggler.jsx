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
    return <div className="toggler" onClick={this.handleCLick}>{this.state.isToggleStatus ? 'On status here' : 'Off status here'}</div>
  }
}
export default Toggler;