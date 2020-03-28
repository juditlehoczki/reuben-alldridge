import React from "react";
import Profile from "../img/profile.jpg";

import S from "./StyledComponents";

const ProfilePhoto = () => {
  return (
    <S.ProfilePhoto>
      <img src={Profile} alt="profile" />
    </S.ProfilePhoto>
  );
};

export default ProfilePhoto;
