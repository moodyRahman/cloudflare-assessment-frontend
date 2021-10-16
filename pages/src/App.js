import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
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
