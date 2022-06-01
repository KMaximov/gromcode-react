import React from 'react';
import moment from 'moment';

const Profile = props => (
  <>
    <p className="profile__name">
      {props.userData.firstName} {props.userData.lastName}
    </p>
    <p className="profile__birth">
      Was born {moment(props.userData.birthDate).format('DD MMM YY')} in {props.userData.birthPlace}
    </p>
  </>
);

export default Profile;
