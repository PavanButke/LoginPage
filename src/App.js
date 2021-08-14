  
import { Switch, Route } from "react-router-dom";

import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import ProtectedRoute from "./Components/Authentication/ProtectedRoute"

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;