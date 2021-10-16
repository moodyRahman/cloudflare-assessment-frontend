import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AccessTokenContext} from "./context/LoginContext"

import Feed from './pages/Feed';
import Login from './pages/Login';
import SmartReroute from './pages/SmartReroute';

function App() {
  // store JWT token here, derive username later rather than store it as it's own
  const [accessToken, setAccessToken] = useState("");

  return (
    <AccessTokenContext.Provider value={{accessToken, setAccessToken}}>
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path='/'>
            <SmartReroute />
          </Route>
        </Switch>
      </div>
    </Router>
    </AccessTokenContext.Provider>
  );
}

export default App;
