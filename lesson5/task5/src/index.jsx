// 0. create project 
// 1. make static layout 
// 2. divide into components  
// 3. static react version 
// 4. declare state and props 
// 5. write logic
import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from './Toggler';

const rootElement = document.querySelector("#root");

ReactDOM.render(<Toggler />, rootElement);
