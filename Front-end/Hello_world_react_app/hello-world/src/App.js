import './App.css';
import Increment from './Increment';
function App() {
  const number = 5;
  return (
    <div>
      <div class ='center'>
      <Increment number={number} />
      </div>
    </div>
  );
}

export default App;
