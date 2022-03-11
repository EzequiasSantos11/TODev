import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";

export const PrivateRouter = ({component: Component, ...rest})=>(
  <Route
    {...rest}
    render={props => isAuthenticated() ? (
      <Component {...props}/>
    ):(
      <Redirect to={{pathname: "/", state: {from: props.location}}}/>
    )
  }
  />
);