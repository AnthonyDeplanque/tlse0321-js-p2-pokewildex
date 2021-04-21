import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Container/Navbar';
import PokedexList from './Components/PokedexList';
import Comparator from './Components/Comparator';
import RandomTeam from './Components/RandomTeam';
import StaffList from './Components/StaffList';
import './App.css';
import Header from './Container/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <PokedexList />
            </Route>
            <Route path="/PokedexList">
              <PokedexList />
            </Route>
            <Route path="/RandomTeam">
              <RandomTeam />
            </Route>
            <Route path="/Comparator">
              <Comparator />
            </Route>
            <Route path="/StaffList">
              <StaffList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
