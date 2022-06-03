import React, { Component } from 'react';

// 1. Записати isOnline зі значенням - тру.
// 2. Підписатися на події та в залежності від статусу змінювати isOnline.
// 3. Відписатися від подій по завершеню

class ConnectionStatus extends Component {
  state = {
    isOnline: true,
  };

  componentDidMount() {
    window.addEventListener('offline', this.offlineStatus);
    window.addEventListener('online', this.onlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('offline', this.offlineStatus);
    window.removeEventListener('online', this.onlineStatus);
  }

  offlineStatus = () => {
    this.setState({
      isOnline: false,
    });
  };

  onlineStatus = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    if (this.state.isOnline) {
      return <div className="status">online</div>;
    }
    return <div className="status status_offline">offline</div>;
  }
}

export default ConnectionStatus;
