import './App.css';
import Increment from './Increment';



function App() {
  const number = 5;
  return (
    <div>
    <Increment number={number} />
  </div>
  );
}

export default App;
