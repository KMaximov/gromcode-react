import React from 'react';
import Transaction from './Transaction';
// 1. підключити moment.js та витягнути дату + час
// 2. числа відформатувати за допомогою new Intl.NumberFormat локаль en-GB.
// 3. відобразити кожен елемент вхідного массиву та задати значення key

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(elem => (
      <Transaction key={elem.id} {...elem} />
    ))}
  </ul>
);

export default TransactionsList;
