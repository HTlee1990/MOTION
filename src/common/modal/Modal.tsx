import './Modal.scss';
import Button from '../Button';
import { useState, useRef, useEffect } from 'react';
type Props = {
  onClick: (e?: any) => void;
  needUrl: boolean;
};

function Modal({ onClick, needUrl }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const handler = e.target.id === 'Title' ? setTitle : setUrl;
    handler(e.target.value);
  };
  const handleTextArea: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBody(e.target.value);
  };
  const closeModal = (e: any) => {
    e.preventDefault();
    if (e.target === modalRef.current) {
      onClick();
    }
  };
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('clicked!');
  };

  return (
    <div className="modal__background" ref={modalRef} onClick={closeModal}>
      <form
        className="form__wrapper"
        autoComplete="off"
        onClick={submitHandler}
      >
        <button className="close__btn" onClick={onClick}>
          &#215;
        </button>
        <div className="input__wrapper">
          <label htmlFor="Title">Title</label>
          <input type="text" id="Title" value={title} onChange={handleInput} />
        </div>

        {needUrl ? (
          <div className="input__wrapper">
            <label htmlFor="URL">URL</label>
            <input type="text" id="URL" value={url} onChange={handleInput} />
          </div>
        ) : (
          <div className="input__wrapper">
            <label htmlFor="body">BODY</label>
            <textarea id="body" value={body} onChange={handleTextArea} />
          </div>
        )}
        <Button className="add__btn" id="hoho">
          ADD
        </Button>
      </form>
    </div>
  );
}

export default Modal;
