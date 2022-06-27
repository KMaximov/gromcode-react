import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleStatusOnline = () => setStatus('online');
    const handleStatusOffline = () => setStatus('offline');

    window.addEventListener('online', handleStatusOnline);
    window.addEventListener('offline', handleStatusOffline);

    return () => {
      window.removeEventListener('online', handleStatusOnline);
      window.removeEventListener('offline', handleStatusOffline);
    };
  }, []);

  if (status === 'online') {
    return <div className="status">online</div>;
  }
  return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
