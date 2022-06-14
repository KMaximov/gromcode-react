// 0. create project +
// 1. make static layout +
// 2. divide into components +
// 3. static react version - зробити статичну версію в реакті +
// 4. declare state and props - які пропси приймає кожен компонент і що повино бути в стейті +
// 5. write logic +

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import FilterableProductTable from './FilterableProductTable';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, rootElement);
