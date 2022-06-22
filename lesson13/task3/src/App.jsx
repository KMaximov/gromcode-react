import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const App = () => (
  <BrowserRouter>
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/users" component={Users}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);
// BrowserRouter - визначає частину проекту яка буде під роутінгом
// Роутінг - це умовний оператор який в залежності від юрла відмальовує або ховає деякі компоненти
export default App;
