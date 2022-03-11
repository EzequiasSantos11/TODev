import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/login";
import Deashboard from "./pages/Deashboard";
import {PrivateRouter} from "./PrivateRoutes";

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <PrivateRouter path="/deashboard" exact component={Deashboard}/>
      </Switch>
    </BrowserRouter>
  )
}