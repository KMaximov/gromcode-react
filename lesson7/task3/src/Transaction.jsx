import React from 'react';
import moment from 'moment';

const Transactions = ({ from, to, amount, rate, time }) => (
  <li className="transaction">
    <span className="transaction__date">{moment(time).format('YY MMM')}</span>
    <span className="transaction__time">{moment(time).format('h:mm')}</span>
    <span className="transaction__assets">
      {from} → {to}
    </span>
    <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
    <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
  </li>
);

export default Transactions;
