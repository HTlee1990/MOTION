import './Header.scss';
import Button from '../common/Button';

type Props = {
  onClick?: (e?: any) => void;
};

export default function Header({ onClick }: Props) {
  return (
    <div className="header__container">
      MOTION
      <div className="button__container">
        <Button id="image" onClick={onClick}>
          IMAGE
        </Button>
        <Button id="video" onClick={onClick}>
          VIDEO
        </Button>
        <Button id="note" onClick={onClick}>
          NOTE
        </Button>
        <Button id="task" onClick={onClick}>
          TASK
        </Button>
      </div>
    </div>
  );
}
