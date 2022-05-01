import './Header.scss';
import Button from '../../common/Button';

type Props = {
  onClick?: (e?: any) => void;
};

export default function Header({ onClick }: Props) {
  return (
    <div className="header__container">
      MOTION
      <div className="button__container">
        <Button id="Image" onClick={onClick}>
          IMAGE
        </Button>
        <Button id="Video" onClick={onClick}>
          VIDEO
        </Button>
        <Button id="Note" onClick={onClick}>
          NOTE
        </Button>
        <Button id="Todo" onClick={onClick}>
          Todo
        </Button>
      </div>
    </div>
  );
}
