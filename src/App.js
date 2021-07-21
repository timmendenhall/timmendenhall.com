import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { ATI } from './pages/work/ATI';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/ati">
            <ATI />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
