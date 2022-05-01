import Header from '../components/header/Header';
import Card from '../components/card/Cards';
import './Body.scss';
import { useState } from 'react';
import NewItem from '../components/newItem/NewItem';
import EditItem from '../components/editItem/EditItem';

type Props = {};
type Context = {
  category: 'Video' | 'Image' | 'Todo' | 'Note';
  title: string;
  src?: string;
  body?: string;
};

type Data = { title: string; src?: string; body?: string };

export default function Body({}: Props) {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [cardCategory, setCardCategory] = useState('');
  const [editItem, setEditItem] = useState({
    category: 'Video',
    title: '',
    idx: 0,
  });

  const handleModal = (e?: any) => {
    if (e) {
      setCardCategory(e.target.id);
    }
    setModalShow((prev) => !prev);
  };

  const [datas, setDatas] = useState([
    { category: 'Image', title: 'Image', src: 'https://picsum.photos/560/300' },
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
    const { category, title, src, body } = context;
    let item: any;
    if (category === 'Image' || category === 'Video') {
      item = { category, title, src };
    } else {
      item = { category, title, body };
    }
    setDatas([...datas, item]);
    setModalShow(false);
  };

  const removeCard = (e: any, idx: number) => {
    e.stopPropagation();
    let newDatas = [...datas];
    newDatas.splice(idx, 1);
    setDatas(newDatas);
  };

  const editModalHandler = () => {
    setEditModalShow(!editModalShow);
  };

  const cardClickHandler = (idx: number) => {
    const item = datas[idx];
    setEditItem({ ...item, idx });
    editModalHandler();
  };

  const editCardHandler = (context: Context, idx: number) => {
    const { category, title, src, body } = context;
    let item: any;
    if (category === 'Image' || category === 'Video') {
      item = { category, title, src };
    } else {
      item = { category, title, body };
    }
    const newDatas = [...datas];
    newDatas[idx] = item;

    setDatas(newDatas);
  };

  return (
    <div className="body__view">
      {modalShow && (
        <NewItem
          closeHandler={handleModal}
          addCard={addCard}
          cardCategory={cardCategory}
        />
      )}
      {editModalShow && (
        <EditItem
          closeHandler={editModalHandler}
          item={editItem}
          editCardHandler={editCardHandler}
        />
      )}
      <Header onClick={handleModal} />
      {datas.map((item, idx) => {
        return (
          <Card
            key={idx}
            idx={idx}
            item={item}
            removeCard={removeCard}
            onClick={cardClickHandler}
          />
        );
      })}
    </div>
  );
}
