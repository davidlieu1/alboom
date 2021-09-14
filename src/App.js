import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/layout/Navigation.js';
import FirstPage from './pages/FirstPage.js';
import SecondPage from './pages/SecondPage.js';
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route path='/alboom/' exact={true}>
          <HomePage/>
        </Route>
        <Route path='/alboom/first'>
          <FirstPage/>
        </Route>
        <Route path='/alboom/second'>
          <SecondPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
