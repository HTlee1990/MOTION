import './Modal.scss';
import Button from '../Button';
import { useState, useRef } from 'react';
type Props = {
  onClick: () => void;
};

function Modal({ onClick }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const handler = e.target.id === 'Title' ? setTitle : setUrl;
    handler(e.target.value);
    console.log(e);
  };
  const test = (e: any) => {
    e.preventDefault();
    if (e.target === modalRef.current) {
      onClick();
    }
  };

  return (
    <div className="modal__background" ref={modalRef} onClick={test}>
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
        <Button className="add__btn" id="hoho">
          ADD
        </Button>
      </form>
    </div>
  );
}

export default Modal;
