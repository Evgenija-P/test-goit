import { Btn } from './Button.styled';

const Button = ({ dataIncrement }) => {
  return (
    <Btn type="button" onClick={() => dataIncrement()}>
      Follow
    </Btn>
  );
};
export default Button;
