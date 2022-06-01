// створити компоненту яка буде виконувати 2 функції(очищати заголовок або додавати текст в залежності на яку кнопку було наведення) та задати івенти кнопкам
import React, { Component } from "react";

const coral = 'Coral';
const aqua = 'Aqua';
const bisque = 'Bisque';

class ColorPicker extends Component {

  hoverHandler = text => {  
    const title = document.querySelector('.picker__title');
    title.textContent = text;
  }

  outHandler = () => {
    const title = document.querySelector('.picker__title');
    title.textContent = '';
  }

  render() {
    return (
      <>
        <div className="picker__title"></div>
        <div>
          <button className="picker__button picker__button_coral" onMouseEnter={() => this.hoverHandler(coral)} onMouseLeave={() => this.outHandler()}></button>
          <button className="picker__button picker__button_aqua" onMouseEnter={() => this.hoverHandler(aqua)} onMouseLeave={() => this.outHandler()}></button>
          <button className="picker__button picker__button_bisque" onMouseEnter={() => this.hoverHandler(bisque)} onMouseLeave={() => this.outHandler()}></button>
        </div>
      </>
    )
  }
}

export default ColorPicker;
