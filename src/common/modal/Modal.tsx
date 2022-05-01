import ReactDOM from 'react-dom';
import './Modal.scss';
import Button from '../Button';
import { useState, useRef } from 'react';
type Props = {
  addCard: (context: any) => void;
  onClick: (e?: any) => void;
  target: string;
};

function Modal({ onClick, addCard, target }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState(target);
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
    const context = { category, title, url, body };
    addCard(context);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal__background" ref={modalRef} onClick={closeModal}>
          <form className="form__wrapper" autoComplete="off">
            <button className="close__btn" onClick={onClick}>
              &#215;
            </button>
            <div className="input__wrapper">
              <label htmlFor="Title">Title</label>
              <input
                type="text"
                id="Title"
                value={title}
                onChange={handleInput}
              />
            </div>

            {target === 'Video' || target === 'Image' ? (
              <div className="input__wrapper">
                <label htmlFor="URL">URL</label>
                <input
                  type="text"
                  id="URL"
                  value={url}
                  onChange={handleInput}
                />
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
        </div>,
        document.getElementById('overlay')!
      )}
    </>
  );
}

export default Modal;
