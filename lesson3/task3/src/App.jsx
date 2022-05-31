import React from 'react';
import Comment from './comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
};

const App = () => {
  return (
    <Comment  
      user={userInfo} 
      text='Good Job!' 
      date={new Date('2019-01-01T11:32:19.566Z')} 
    />
  )
};

export default App;