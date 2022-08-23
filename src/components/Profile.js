import React from 'react';
import PropTypes from 'prop-types';
import photo from '../images/photo2.png';

function Profile(props) {
  const avatar = props.avatar === '' ? photo : props.avatar;
  return (
    <div className="profile__preview js__profile-image" style={{ backgroundImage: `url(${avatar})` }}>
      </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;