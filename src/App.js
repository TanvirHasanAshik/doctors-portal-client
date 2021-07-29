import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/ProvateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Patients from './components/Patients/Patients/Patients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import DashboardSetting from './components/Dashboard/DashboardSetting/DashboardSetting';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
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
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/doctor/appointment">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/doctor/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>
          <PrivateRoute path="/doctor/patients">
            <Patients></Patients>
          </PrivateRoute>
          <PrivateRoute path="/doctor/setting">
            <DashboardSetting></DashboardSetting>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
