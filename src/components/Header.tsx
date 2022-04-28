import './Header.scss';
import Button from './Button';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="header__container">
      MOTION
      <div className="button__container">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}
