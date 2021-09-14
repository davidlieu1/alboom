import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import FirstPage from './pages/FirstPage.js';
import SecondPage from './pages/SecondPage.js';

function App() {
  return (
    <div>
      <Navigation/>
      <Route path='/first'>
        <FirstPage/>
      </Route>
      <Route path='/second'>
        <SecondPage/>
      </Route>
    </div>
  );
}

export default App;
