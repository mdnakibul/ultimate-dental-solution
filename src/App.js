import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddDoctor from './components/AddDoctor/AddDoctor';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/Shared/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
