import React from 'react';
import Online from './Online';
import Offline from './Offline';

// 1. добавити компоненти онлайн/офлайн
// 2. в залежності від cтану відображати компоненту

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: props.isOnline,
    };
  }

  render() {
    if (this.state.isOnline) {
      return <Online></Online>;
    }
    return <Offline></Offline>;
  }
}

export default Status;
