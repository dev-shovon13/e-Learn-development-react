import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/404/NotFound';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Mentors from './components/Mentors/Mentors';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/mentors">
            <Mentors />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/benefits">
            <Benefits />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
