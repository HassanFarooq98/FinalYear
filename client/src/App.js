import React, {Fragment,useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import  Navbar  from './component/Layout/Navbar';
import  Register  from './component/auth/Register';
import  Login  from './component/auth/Login';
import PrivateRoute from './component/routing/PrivateRoute';

import  Landing  from './component/Layout/Landing';
import './App.css';
//Redux
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import AdminLayout from './component/admin/AdminLayout';


const App = () => {

  const [currentPath, setCurrentPath]=useState(window.location.pathname);

  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return(
  <Provider store={store}>
    <Router>
        <Fragment>
          {currentPath==="/"||
           currentPath==="/login" || 
           currentPath==="/register" ? <Navbar/> :null}
        
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route
            exact path="/admin/*"
            element={<AdminLayout/>}
          />
          
        </Routes>
      

        </Fragment>
      
        </Router>
    </Provider>
);

  }

export default App;
