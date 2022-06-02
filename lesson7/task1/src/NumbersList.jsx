import React from 'react';

// const NumbersList = props => {
//   const { numbers } = props;

// const NumbersList = ({ numbers }) => {
//   const numberElems = numbers.map(num => <li>{num}</li>);

//   const element = <ul>{numberElems}</ul>;

//   return element;
//   return (
//     <ul>
//       {numbers.map(num => (<li key={num}>{num}</li>))}
//     </ul>
//   )
// };
const NumbersList = ({ numbers }) => (
  <ul>
    {numbers.map(num => (
      <li key={num}>{num}</li>
    ))}
  </ul>
);

export default NumbersList;
