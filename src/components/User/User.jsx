import { UserList } from './User.styled';

const User = ({ user, tweets, followers }) => {
  return (
    <UserList>
      <li>{user} </li>
      <li>{tweets} tweets</li>
      <li>{followers} followers</li>
    </UserList>
  );
};
export default User;
