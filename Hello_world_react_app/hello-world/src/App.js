import './App.css';
import Increment from './Increment';
import BasicExample from './spinner';
import accordion from './accor';


function App() {
  const number = 5;
  return (
    <div>
    <Increment number={number} />
    <BasicExample/>
    <accordion/>
  </div>
  );
}

export default App;
