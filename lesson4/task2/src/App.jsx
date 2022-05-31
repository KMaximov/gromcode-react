import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="Kyiv" offset={3}/>
      <Clock location="Paris" offset={10}/>
      <Clock location='London' offset={5}/>
    </>
  );
};

export default App;