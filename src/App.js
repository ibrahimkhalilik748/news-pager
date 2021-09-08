import './App.css';
import Post from './component/Post/Post';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import News from './component/News/News';
import { createContext, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Admin from './component/Admin/Admin';
import PrivateRoute from './component/LogIn/PrivateRoute';
import LogIn from './component/LogIn/LogIn';

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}> 
      <Router>
        <div>
          <Navbar/>
          <Switch>
            {/* <Route export path="/">
              <Home />
            </Route> */}

            <Route path="/home">
              <Home />
            </Route>

            {/* <Route path="/news">
              <News />
            </Route> */}

            <Route path="/news/:_id">
              <News />
            </Route>

            <Route path="/post">
              <Post />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route path="/addAdmin">
              <Admin />
            </Route>
          </Switch>
          
        </div>
      </Router>
      </ userContext.Provider>
    </div>
  );
}

export default App;
