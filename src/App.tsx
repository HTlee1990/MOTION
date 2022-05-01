import './App.css';
import Body from './views/Body';
import Modal from './common/modal/Modal';
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [needURL, setNeedURL] = useState(true);
  const handleModal = (e?: any) => {
    if (e) {
      if (e.target.id === 'image' || e.target.id === 'video') setNeedURL(true);
      else setNeedURL(false);
    }
    setModalShow((prev) => !prev);
  };
  return (
    <div
      className="App"
      style={{ backgroundImage: `url('/images/darkbackground.png')` }}
    >
      {modalShow && <Modal onClick={handleModal} needUrl={needURL} />}
      <Body onClick={handleModal} />
    </div>
  );
}

export default App;
