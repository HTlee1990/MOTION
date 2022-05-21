import { useState } from 'react';
import Modal from '../../common/modal/Modal';
import Button from '../../common/Button';
import { MediaContext, TextContext } from '../../common/type';

type Props = {
  closeHandler: () => void;
  editCardHandler: (context: MediaContext | TextContext, idx: number) => void;
  item: any;
};

const EditItem = ({ closeHandler, editCardHandler, item }: Props) => {
  const [category, setCategory] = useState(item.category);
  const [title, setTitle] = useState(item.title);
  const [src, setSrc] = useState(item.src);
  const [body, setBody] = useState(item.body);

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
    editCardHandler(context, item.idx);
    closeHandler();
  };
  return (
    <Modal closeHandler={closeHandler}>
      <form className="form__wrapper" autoComplete="off">
        <div className="input__wrapper">
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" value={title} onChange={handleInput} />
        </div>

        {category === 'Video' || category === 'Image' ? (
          <div className="input__wrapper">
            <label htmlFor="URL">URL</label>
            <input type="text" id="URL" value={src} onChange={handleInput} />
          </div>
        ) : (
          <div className="input__wrapper">
            <label htmlFor="body">BODY</label>
            <textarea id="body" value={body} onChange={handleTextArea} />
          </div>
        )}
        <Button className="add__btn" id="hoho" onClick={submitHandler}>
          EDIT
        </Button>
      </form>
    </Modal>
  );
};

export default EditItem;
