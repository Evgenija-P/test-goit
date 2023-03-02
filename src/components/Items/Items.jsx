import { useSelector } from 'react-redux';
import {
  Item,
  Line,
  List,
  LogoImg,
  PictureComponent,
  ItemWrapper,
  Avatar,
  AvatarWrapper,
} from './Items.styled';
import Logo from '../../img/Logo.png';
import Picture from '../../img/pictureComponent.png';
import User from 'components/User';
import { getUsers } from 'redux/selectors';

const Items = () => {
  const { users } = useSelector(getUsers);
  return (
    <>
      <List>
        {users.map(({ id, user, tweets, followers, avatar, isFollowing }) => (
          <Item key={id}>
            <Line />
            <LogoImg src={Logo} alt="Logo" />
            <AvatarWrapper>
              <Avatar src={avatar} alt={user} />
            </AvatarWrapper>

            <ItemWrapper>
              <PictureComponent src={Picture} alt="PictureComponent" />
              <User
                user={user}
                tweets={tweets}
                followers={followers}
                id={id}
                buttonState={isFollowing}
              />
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Items;
