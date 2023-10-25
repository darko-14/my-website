import React from 'react';
import './css/App.css';
import Header from './components/Header';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <About />

      <header className="header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="main">
        <div>abe kaj si</div>
      </div>
    </div>
  );
}

export default App;
