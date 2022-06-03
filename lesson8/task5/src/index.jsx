// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version - зробити статичну версію в реакті +
// 4. declare state and props - які пропси приймає кожен компонент і що повино бути в стейті +
// 5. write logic +

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ConnectionStatus from './ConnectionStatus';

const rootElement = document.querySelector('#root');

ReactDOM.render(<ConnectionStatus />, rootElement);
