import './Modal.scss';
import Button from '../Button';
import { useState } from 'react';
type Props = {
  children?: any;
  onClick?: () => void;
};

function ModalBackground({ children }: Props) {
  return <div className="modal__background">{children}</div>;
}

function Modal({ onClick }: Props) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const handler = e.target.id === 'Title' ? setTitle : setUrl;
    handler(e.target.value);
    console.log(e);
  };
  const test = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <ModalBackground>
      <form className="form__wrapper" autoComplete="off">
        <button className="close__btn" onClick={onClick}>
          &#215;
        </button>
        <div className="input__wrapper">
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" value={title} onChange={handleInput} />
        </div>
        <div className="input__wrapper">
          <label htmlFor="URL">URL</label>
          <input type="text" id="URL" value={url} onChange={handleInput} />
        </div>
        <Button className="add__btn" id="hoho" onClick={test}>
          ADD
        </Button>
      </form>
    </ModalBackground>
  );
}

export default Modal;
