import React, { useState } from 'react';
import { UserList } from './User.styled';
import Button from 'components/Button/Button';
import ButtonActive from 'components/ButtonActive';

const User = ({ user, tweets, followers }) => {
  const [clickButton, setClickButton] = useState(false);
  const [allFollowers, setAllFollowers] = useState(followers);

  function dataIncrement() {
    setAllFollowers(allFollowers + 1);
    setClickButton(true);
  }

  function dataDecrement() {
    setAllFollowers(followers);
    setClickButton(false);
  }

  return (
    <UserList>
      <li>{user} </li>
      <li>{tweets} tweets</li>
      <li>{allFollowers} followers</li>
      {clickButton ? (
        <ButtonActive dataDecrement={dataDecrement} />
      ) : (
        <Button dataIncrement={dataIncrement} />
      )}
    </UserList>
  );
};
export default User;
