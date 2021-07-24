import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { ATI } from './pages/work/ATI';
import { Mars } from './pages/work/Mars';
import { Footer } from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/ati">
            <ATI />
          </Route>
          <Route path="/mars">
            <Mars />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
