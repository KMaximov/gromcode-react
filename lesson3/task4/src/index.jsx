import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

const element = {
  firstName: 'John',
  lastName: 'Doe',
  yearsOld: new Date('2005-01-01T11:11:11.819Z'),
};

ReactDOM.render(
  <Greeting
    firstName={element.firstName}
    lastName={element.lastName}
    birthDate={element.yearsOld}
  />,
  rootElement,
);
