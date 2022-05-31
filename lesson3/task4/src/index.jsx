import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

const getFullYear = () => new Date().getFullYear() - new Date('2005-01-01T11:11:11.819Z').getFullYear()

const element = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: getFullYear(),
}

ReactDOM.render(<Greeting firstName={element.firstName} lastName={element.lastName} birthDate={element.birthDate}/>, rootElement)