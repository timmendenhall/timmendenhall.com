import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { ATI } from './pages/work/ATI';
import { Mars } from './pages/work/Mars';
import { Caesars } from './pages/work/Caesars';
import { VSP } from './pages/work/VSP';
import { Footer } from './components/Footer';
// import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      {/*<ScrollToTop />*/}
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/ati">
            <ATI />
          </Route>
          <Route path="/caesars">
            <Caesars />
          </Route>
          <Route path="/mars">
            <Mars />
          </Route>
          <Route path="/vsp">
            <VSP />
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
