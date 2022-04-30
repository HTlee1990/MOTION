import './App.css';
import Header from './components/Header';
import Body from './views/Body';
import Modal from './common/modal/Modal';
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(true);
  const handleModal = () => {
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
