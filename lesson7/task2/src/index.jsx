// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version - зробити статичну версію в реакті +
// 4. declare state and props - які пропси приймає кожен компонент і що повино бути в стейті +
// 5. write logic +

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UserList from './UserList';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
];

ReactDOM.render(<UserList users={users} />, rootElement);
