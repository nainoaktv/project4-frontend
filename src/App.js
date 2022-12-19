// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import Feed from './components/Feed';
import Notifications from './components/Notifications';
import DirectMessage from './components/DirectMessage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login" />
  }} />
}

function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} /> */}
        <div className="container mt-5">
          <Switch>
            <Route path='/signup' component={Signup} />
            <Route
              path="/login"
              render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />}
            />
            <PrivateRoute path="/users/:id" component={Profile} user={currentUser} handleLogout={handleLogout} />
            <Route exact path="/" component={Home} />
            {/* <Route path="/profile" component={Profile} /> */}
            <Route path="/feed" component={Feed} />
            <Route path="/messages" component={DirectMessage} />
            <Route path="/notifications" component={Notifications} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
