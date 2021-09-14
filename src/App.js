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
        <Route path='/' exact={true}>
          <HomePage/>
        </Route>
        <Route path='/first'>
          <FirstPage/>
        </Route>
        <Route path='/second'>
          <SecondPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
