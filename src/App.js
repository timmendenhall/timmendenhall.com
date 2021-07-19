import './App.css';
import { NavBar } from './components/NavBar';
import { Welcome } from './components/Welcome';
import { About } from './components/About';
import { Work } from './components/Work';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Work />
    </div>
  );
}

export default App;
