import './App.css';
import Header from './components/Header';
import Body from './views/Body';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url('/images/darkbackground.png')` }}
    >
      <Body />
    </div>
  );
}

export default App;
