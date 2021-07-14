import './App.css';
// import {Header} from "./components/Header";
import { Welcome } from './components/Welcome';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      <Welcome />
      <About />
    </div>
  );
}

export default App;
