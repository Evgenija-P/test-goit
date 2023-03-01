import React, { useState, useEffect } from 'react';
import { UserList } from './User.styled';
import Button from 'components/Button/Button';
import ButtonActive from 'components/ButtonActive';

const User = ({ user, tweets, followers }) => {
  const [clickButton, setClickButton] = useState(false);
  const [allFollowers, setAllFollowers] = useState(followers);
  const [currentFollovers, setCurrentFollovers] = useState(followers);

  useEffect(() => {
    followersFormating(allFollowers);
    console.log(allFollowers);
  }, [allFollowers]);

  function dataIncrement() {
    setAllFollowers(allFollowers + 1);
    setClickButton(true);
    followersFormating(allFollowers);
  }

  function dataDecrement() {
    setAllFollowers(allFollowers - 1);
    setClickButton(false);
    followersFormating(allFollowers);
  }

  function followersFormating(allFollowers) {
    const stateFollowers = `${allFollowers}`;
    const currentFollowers = stateFollowers.split('');

    if (allFollowers < 1000) {
      setCurrentFollovers(allFollowers);
      return;
    }
    if (allFollowers <= 9999) {
      currentFollowers.splice(1, 0, ',');
      setCurrentFollovers(currentFollowers.join(''));
      return;
    }
    if (100000 <= allFollowers) {
      currentFollowers.splice(3, 0, ',');
      setCurrentFollovers(currentFollowers.join(''));
      return;
    }

    if (10000 <= allFollowers <= 99999) {
      currentFollowers.splice(2, 0, ',');
      setCurrentFollovers(currentFollowers.join(''));
      return;
    }
  }

  return (
    <UserList>
      <li>{user} </li>
      <li>{tweets} tweets</li>
      <li>{currentFollovers} followers</li>
      {clickButton ? (
        <ButtonActive dataDecrement={dataDecrement} />
      ) : (
        <Button dataIncrement={dataIncrement} />
      )}
    </UserList>
  );
};
export default User;
