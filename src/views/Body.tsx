import Header from '../components/header/Header';
import Card from '../components/card/Cards';
import Modal from '../common/modal/Modal';
import './Body.scss';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';

type Props = {};
type Context = {
  category: 'Video' | 'Image' | 'Todo' | 'Note';
  title: string;
  url: string;
  body: string;
};
type Data = { title: string; src?: string; body?: string };

export default function Body({}: Props) {
  const [modalShow, setModalShow] = useState(false);
  const [target, setTarget] = useState('');
  const handleModal = (e?: any) => {
    if (e) {
      setTarget(e.target.id);
    }
    setModalShow((prev) => !prev);
  };

  const [datas, setDatas] = useState([
    { category: 'Image', title: 'Image', src: 'https://picsum.photos/600/300' },
    { category: 'Image', title: 'Image', src: 'https://picsum.photos/600/300' },
    {
      category: 'Video',
      title: 'Video',
      src: 'https://www.youtube.com/embed/L3cY4wQnv60',
    },
    {
      category: 'Todo',
      title: 'Todo',
      body: 'This is sth that I am supposed to do',
    },
    {
      category: 'Note',
      title: 'Note',
      body: 'This is sth that i wrote in note',
    },
  ]);

  const addCard = (context: Context) => {
    const { category, title, url, body } = context;
    let item: any;
    if (category === 'Image' || category === 'Video') {
      item = { category, title, src: url };
    } else {
      item = { category, title, body };
    }
    setDatas([...datas, item]);
    setModalShow(false);
  };

  const removeCard = (idx: number) => {
    let newDatas = [...datas];
    newDatas.splice(idx, 1);
    setDatas(newDatas);
  };

  return (
    <div className="body__view">
      {modalShow && (
        <Modal onClick={handleModal} addCard={addCard} target={target} />
      )}
      <Header onClick={handleModal} />
      {datas.map((item, idx) => {
        console.log('why???', item);
        return <Card key={idx} idx={idx} item={item} removeCard={removeCard} />;
      })}
    </div>
  );
}
