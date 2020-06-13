import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
