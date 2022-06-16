import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  changeContent = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    // let icon;
    // if (this.state.isOpen) {
    //   icon = <i className="fa-solid fa-chevron-up"></i>;
    // } else {
    //   icon = <i className="fa-solid fa-chevron-down"></i>;
    // }

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.changeContent}>
            {this.state.isOpen ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isOpen ? <div className="expand__content">{this.props.children}</div> : null}
      </div>
    );
  }
}

export default Expand;
