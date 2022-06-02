// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version - зробити статичну версію в реакті +
// 4. declare state and props - які пропси приймає кожен компонент і що повино бути в стейті +
// 5. write logic +

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList';

const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];
// const element = (<ul>
//   <li>{numbers[0]}</li>
//   <li>{numbers[1]}</li>
//   <li>{numbers[2]}</li>
//   <li>{numbers[3]}</li>
//   <li>{numbers[4]}</li>
// </ul>);
// const numberElems = numbers.map(num => <li>{num}</li>)
// const element = <ul>{numberElems}</ul>;

ReactDOM.render(<NumbersList numbers={numbers} />, rootElement);
