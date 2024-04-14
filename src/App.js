import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';

function App() {
  return (
    //jsx: 자바스크립트 안에서 html하듯이 xml넣는곳
    <div className="App">
      <Accordion/> {/* 아코디언 컴포넌트 */}
    </div>
  );
}

export default App;
