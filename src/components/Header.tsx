import './Header.scss';
import Button from '../common/Button';

type Props = {
  onClick: () => void;
};

export default function Header({ onClick }: Props) {
  return (
    <div className="header__container">
      MOTION
      <div className="button__container">
        <Button onClick={onClick}>IMAGE</Button>
        <Button onClick={onClick}>VIDEO</Button>
        <Button onClick={onClick}>NOTE</Button>
        <Button onClick={onClick}>TASK</Button>
      </div>
    </div>
  );
}
