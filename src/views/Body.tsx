import Header from '../components/header/Header';
import Card from '../components/card/Cards';
import './Body.scss';
import { useState } from 'react';
import NewItem from '../components/newItem/NewItem';
import EditItem from '../components/editItem/EditItem';
import { MediaContext, TextContext } from '../common/type';

type Categories = 'Video' | 'Image' | 'Todo' | 'Note';

type EditableItem = {
  idx: number;
  title: string;
  category: Categories;
  src?: string;
  body?: string;
};

type CardContext = {
  category: Categories;
  title: string;
  src?: string;
  body?: string;
};

const Body: React.FC = () => {
  //useState 상태관리
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [editModalShow, setEditModalShow] = useState<boolean>(false);
  const [cardCategory, setCardCategory] = useState<string>('');
  const [editItem, setEditItem] = useState<EditableItem>({
    category: 'Image',
    title: '',
    src: '',
    idx: 0,
  });

  const [datas, setDatas] = useState<CardContext[]>([
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

  const [draggingItem, setDraggingItem] = useState<number>();
  const [droppableItem, setDroppableIem] = useState<number | undefined>();

  //카드 메소드 관리
  const handleModal = (e?: any) => {
    if (e) {
      setCardCategory(e.target.id);
    }
    setModalShow((prev) => !prev);
  };

  const addCard = (context: CardContext) => {
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
    const item: EditableItem = { ...datas[idx], idx };
    //어떤 항목을 수정할 것인지 저장하여 EditItemComponent에 전달
    console.log('cardClickHandler', item);
    setEditItem({ ...item });
    editModalHandler();
  };

  const editCardHandler = (
    context: MediaContext | TextContext,
    idx: number
  ) => {
    let item: MediaContext | TextContext;
    if (context.category === 'Image' || context.category === 'Video') {
      const { category, title, src } = context;
      item = { category, title, src };
    } else {
      const { category, title, body } = context as TextContext;
      item = { category, title, body };
    }
    const newDatas = [...datas];
    newDatas[idx] = item;

    setDatas(newDatas);
  };

  //Drag Event
  const onDragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    idx: number
  ) => {
    const target = e.target as HTMLDivElement;
    target.classList.add('lifted');
    setDraggingItem(idx);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    // console.log('it is being dragging');
  };
  const dragEnterHandler = (
    e: React.DragEvent<HTMLDivElement>,
    idx: number
  ) => {
    e.preventDefault();
    setDroppableIem(idx);
  };
  const dragLeaveHandler = (
    e: React.DragEvent<HTMLDivElement>,
    idx: number
  ) => {
    e.preventDefault();
    if (idx === droppableItem) {
      setDroppableIem(undefined);
    }
  };
  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    target.classList.remove('lifted');
    if (draggingItem === droppableItem) return;
    //dragging 하는 아이템과 떨어뜨릴 곳의 아이템이 다르다면, 위치를 변경한다.

    setDatas((prevData) => {
      const newDatas = [...prevData];
      [newDatas[draggingItem! as number], newDatas[droppableItem! as number]] =
        [newDatas[droppableItem! as number], newDatas[draggingItem! as number]];
      return newDatas;
    });
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
            onDragStartHandler={onDragStartHandler}
            dragHandler={dragHandler}
            dragEndHandler={dragEndHandler}
            dragEnterHandler={dragEnterHandler}
            dragLeaveHandler={dragLeaveHandler}
          />
        );
      })}
    </div>
  );
};

export default Body;
