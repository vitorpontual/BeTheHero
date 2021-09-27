import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Profile from './pages/Profile'
import Incident from './pages/NewIncident'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path='/profile' component={Profile} />
        <Route path='/incidents/new' component={Incident} />
      </Switch>
    </BrowserRouter>
  )
}