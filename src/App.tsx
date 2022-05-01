import './App.css';
import Body from './views/Body';
import Modal from './common/modal/Modal';
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(true);
  const handleModal = () => {
    console.log('clicked');
    setModalShow((prev) => !prev);
  };
  return (
    <div
      className="App"
      style={{ backgroundImage: `url('/images/darkbackground.png')` }}
    >
      {modalShow && <Modal onClick={handleModal} />}
      <Body onClick={handleModal} />
    </div>
  );
}

export default App;
