import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PropertyListings from './pages/PropertyListings';
import UserProfile from './pages/UserProfile';
import Login from './components/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // In a real app, you'd verify credentials with the backend here
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/properties" component={PropertyListings} />
          <Route path="/profile">
            {user ? <UserProfile user={user} /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

