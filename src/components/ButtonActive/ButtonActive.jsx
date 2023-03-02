import { Btn } from './ButtonActive.styled';

const ButtonActive = ({ dataDecrement }) => {
  return (
    <Btn type="button" onClick={() => dataDecrement()}>
      Following
    </Btn>
  );
};
export default ButtonActive;
