import React from 'react';
import './App.scss';
import Navbar from '../components/Navbar/Navbar';
import Intro from "../components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <header>
          <Navbar/>
      </header>
      <main>
          <header className="header">
              <Intro/>
          </header>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
