import datas from '../../data/users.json';
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

const Items = () => {
  console.log(datas);

  return (
    <>
      <div>Item</div>
      <List>
        {datas.map(({ id, user, tweets, followers, avatar }) => (
          <Item key={id}>
            <Line />
            <LogoImg src={Logo} alt="Logo" />
            <AvatarWrapper>
              <Avatar src={avatar} alt={user} />
            </AvatarWrapper>

            <ItemWrapper>
              <PictureComponent src={Picture} alt="PictureComponent" />

              {user}
              {tweets}
              {followers}
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Items;
