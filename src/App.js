import { createContext } from 'react';
import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/footer';
import { Nav } from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav /> 
        <Content />
      <Footer />
    </div>
  );
}

export default App;
