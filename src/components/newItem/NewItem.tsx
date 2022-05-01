import { useState } from 'react';
import Button from '../../common/Button';
import Modal from '../../common/modal/Modal';
import './NewItem.scss';

type Props = {
  addCard: (context: any) => void;
  cardCategory: string;
  closeHandler: (e?: any) => void;
};

const NewItem = ({ addCard, closeHandler, cardCategory }: Props) => {
  const [category, setCategory] = useState(cardCategory);
  const [title, setTitle] = useState('');
  const [src, setSrc] = useState('');
  const [body, setBody] = useState('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const handler = e.target.id === 'Title' ? setTitle : setSrc;
    handler(e.target.value);
  };
  const handleTextArea: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBody(e.target.value);
  };
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const context = { category, title, src, body };
    addCard(context);
  };
  return (
    <Modal closeHandler={closeHandler}>
      <form className="form__wrapper" autoComplete="off">
        <div className="input__wrapper">
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" value={title} onChange={handleInput} />
        </div>

        {cardCategory === 'Video' || cardCategory === 'Image' ? (
          <div className="input__wrapper">
            <label htmlFor="src">src</label>
            <input type="text" id="src" value={src} onChange={handleInput} />
          </div>
        ) : (
          <div className="input__wrapper">
            <label htmlFor="body">BODY</label>
            <textarea id="body" value={body} onChange={handleTextArea} />
          </div>
        )}
        <Button className="add__btn" id="hoho" onClick={submitHandler}>
          ADD
        </Button>
      </form>
    </Modal>
  );
};

export default NewItem;
