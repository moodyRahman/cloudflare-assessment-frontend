import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {AccessTokenContext} from "./context/LoginContext"


function App() {
  // store JWT token here, derive username later rather than store it as it's own
  const [accessToken, setAccessToken] = useState("");

  return (
    <AccessTokenContext.Provider value={{accessToken, setAccessToken}}>
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            ABOUT
          </Route>
          <Route path="/users">
            USSERS
          </Route>
          <Route path="/">
            HOME
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
