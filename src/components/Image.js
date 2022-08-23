import React from 'react';
import GetImage from './GetImage';
import Profile from './Profile';

function Image(props) {
  const updateAvatar = (avatar) => {
    props.updateAvatar({
        ...props.dataCard, [props.dataCard.photo]: avatar,
    });
  };
  return (
    <div>
      <GetImage avatar={props.dataCard.photo} updateAvatar={updateAvatar} />
      <Profile avatar={props.dataCard.photo} />
    </div>
  );
}

export default Image;