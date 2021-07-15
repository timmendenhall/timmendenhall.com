import './App.css';
import { NavBar } from './components/NavBar';
import { Welcome } from './components/Welcome';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
    </div>
  );
}

export default App;
