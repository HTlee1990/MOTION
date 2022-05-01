import Header from '../components/header/Header';
import Card from '../components/card/Card';
import './Body.scss';

const dummy = [
  { title: 'Image', src: 'https://picsum.photos/560/300' },
  { title: 'Image', src: 'https://picsum.photos/560/300' },
  { title: 'Video', src: 'https://www.youtube.com/embed/L3cY4wQnv60' },
  { title: 'Todo', body: 'This is sth that I am supposed to do' },
  { title: 'Note', body: 'This is sth that i wrote in note' },
];
type Props = {
  onClick?: (e?: any) => void;
};

export default function Body({ onClick }: Props) {
  return (
    <div className="body__view">
      <Header onClick={onClick} />
      {dummy.map((item, idx) => {
        return <Card key={idx} item={item} />;
      })}
    </div>
  );
}
