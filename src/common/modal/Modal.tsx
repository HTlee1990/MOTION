import ReactDOM from 'react-dom';
import './Modal.scss';
import Button from '../Button';
import { useState, useRef } from 'react';
type Props = {
  closeHandler: (e?: any) => void;
  children?: any;
};

function Modal({ closeHandler, children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: any) => {
    e.preventDefault();
    if (e.target === modalRef.current) {
      closeHandler();
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal__background" ref={modalRef} onClick={closeModal}>
          <div className="modal__content">
            <button className="close__btn" onClick={closeHandler}>
              &#215;
            </button>
            {children}
          </div>
        </div>,
        document.getElementById('overlay')!
      )}
    </>
  );
}

export default Modal;
