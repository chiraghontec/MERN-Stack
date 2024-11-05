import './App.css';
import Increment from './Increment';
import BasicExample from './spinner';


function App() {
  const number = 5;
  return (
    <div>
    <Increment number={number} />
    <BasicExample/>
  </div>
  );
}

export default App;
