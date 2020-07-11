import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Unauthorized from './components/routes/Unauthorized';
import OtherRoute from './components/OtherRoute';

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(false);
  };

  return (
    <div className='App'>
      <Router>
        <Route
          exact
          path='/'
          handleLogin={handleLogin}
          render={(props) => (
            <Landing
              {...props}
              user={user.toString()}
              handleLogin={handleLogin}
            />
          )}
        />
        <ProtectedRoute
          exact
          path='/dashboard'
          user={user}
          handleLogout={handleLogout}
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path='/otherroute'
          user={user}
          handleLogout={handleLogout}
          component={OtherRoute}
        />
        <Route exact path='/unauthorized' component={Unauthorized} />
      </Router>
    </div>
  );
}

export default App;
