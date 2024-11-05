import logo from './max.png';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
    <div className="alert alert-success" role="alert">
      This is a success alert—check it out!
    </div>
    <div className="alert alert-danger" role="alert">
      This is a danger alert—something went wrong!
    </div>
    <div className="alert alert-warning" role="alert">
      This is a warning alert—be careful!
    </div>
    <div className="alert alert-info" role="alert">
      This is an info alert—just so you know!
    </div>
  </div>
  );
}

export default App;
