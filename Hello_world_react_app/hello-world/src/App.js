import logo from './max.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>My Bestfriend Max</h1>
      <p>This is my puppy <em>Max</em>. He's purebred <bold>Golden Retriever, and he's two months old. Max is super energrtic and loves to play fetch.</bold></p>
      <img src={logo} className="App-logo" alt="logo"/>
      </header>
    </div>
  );
}

export default App;
