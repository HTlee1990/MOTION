import Header from '../components/Header';
import './Body.css';
type Props = {
  onClick: () => void;
};

export default function Body({ onClick }: Props) {
  return (
    <div className="body__view">
      <Header onClick={onClick} />
    </div>
  );
}
