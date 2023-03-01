import styled from '@emotion/styled';

export const List = styled.ul`
  font-size: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
`;

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ItemWrapper = styled.li`
  padding: 28px 36px 36px;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  :focus,
  :hover {
    box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  top: 20px;
  left: 20px;
`;

export const Line = styled.hr`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const PictureComponent = styled.img`
  width: 308px;
  height: 168px;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;
export const AvatarWrapper = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;
