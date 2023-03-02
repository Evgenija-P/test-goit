import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserList } from './User.styled';
import Button from 'components/Button/Button';
import ButtonActive from 'components/ButtonActive';
import { incrementFollowesr, decrementFollowesr } from 'redux/userSlice';

const User = ({ id, user, tweets, followers, buttonState }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [allFollowers, setAllFollowers] = useState(followers);
  const [currentFollovers, setCurrentFollovers] = useState(followers);

  useEffect(() => {
    followersFormating(followers);
  }, [followers]);

  function dataIncrement() {
    dispatch(incrementFollowesr(id));
    followersFormating(allFollowers);
  }

  function dataDecrement() {
    dispatch(decrementFollowesr(id));
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
      {buttonState ? (
        <ButtonActive dataDecrement={dataDecrement} />
      ) : (
        <Button dataIncrement={dataIncrement} />
      )}
    </UserList>
  );
};
export default User;
