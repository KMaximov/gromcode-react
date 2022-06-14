import React from 'react';

const UserForm = ({ userData, handleChange }) => (
  <form className="user-form">
    <input
      type="text"
      name="firstName"
      className="user-form__input"
      value={userData.firstName}
      onChange={handleChange}
    />
    <input
      type="text"
      name="lastName"
      className="user-form__input"
      value={userData.lastName}
      onChange={handleChange}
    />
  </form>
);

// class UserForm extends Component {
//   render() {
//     return (
//       <form className="user-form">
//         <input
//           type="text"
//           name="firstName"
//           className="user-form__input"
//           value={this.props.userData.firstName}
//           onChange={this.props.handleChange}
//         />
//         <input
//           type="text"
//           name="lastName"
//           className="user-form__input"
//           value={this.props.userData.lastName}
//           onChange={this.props.handleChange}
//         />
//       </form>
//     );
//   }
// }

export default UserForm;
