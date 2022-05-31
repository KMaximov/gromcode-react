import React from 'react';

class GoodButton extends React.Component {
  handleClick(e) {
    // console.log(e); дані обнуляються
    // console.log(e.target.textContent);
    alert('Good Job!')
  }

  render() {
    return ( 
      <button className='fancy-button' onClick={this.handleClick}>Click me!</button>
      );
  }
}

export default GoodButton;