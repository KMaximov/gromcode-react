import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

// Відобразити список користувачів та поле фільтрації
// Описати функцію фільтра яка буде ігнорувати регістр
// Вказати унікальні ключі для кожного елементу списку

class UsersList extends Component {
  state = {
    text: '',
  };

  changeHandler = e =>
    this.setState({
      text: e.target.value,
    });

  filterUsers = users =>
    users.filter(user => user.name.toLowerCase().includes(this.state.text.toLowerCase()));

  render() {
    return (
      <div>
        <Filter onChange={this.changeHandler} />
        <ul className="users">
          {this.filterUsers(this.props.users).map(elem => (
            <User key={elem.id} {...elem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
