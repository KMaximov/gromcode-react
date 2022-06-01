// створити компоненту яка буде виконувати 2 функції(очищати заголовок або додавати текст в залежності на яку кнопку було наведення) та задати івенти кнопкам
import React, { Component } from "react";

const coral = 'Coral';
const aqua = 'Aqua';
const bisque = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  };

  hoverHandler = text => {  
    this.setState ({
      title: text,
    });
  };

  outHandler = () => {
    this.setState ({
      title: '',
    });
  };

  render() {
    return (
      <>
        <div className="picker__title">{this.state.title}</div>
        <div>
          <button className="picker__button picker__button_coral" onMouseEnter={() => this.hoverHandler(coral)} onMouseLeave={() => this.outHandler()}></button>
          <button className="picker__button picker__button_aqua" onMouseEnter={() => this.hoverHandler(aqua)} onMouseLeave={() => this.outHandler()}></button>
          <button className="picker__button picker__button_bisque" onMouseEnter={() => this.hoverHandler(bisque)} onMouseLeave={() => this.outHandler()}></button>
        </div>
      </>
    );
  };
}

export default ColorPicker;
