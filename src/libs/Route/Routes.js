import React from 'react';
import Home from "../Component/Page/Home";

import {Redirect, Route,Switch} from "react-router-dom";
import Login from '../Component/Page/Login';


function Routes(props) {
  return (
    <Switch>
      <Route path={"/home"} component={Home}/>
      <Route path={"/login"} component={Login}/>
      <Redirect to={"/login"}/>
    </Switch>
      );
      }

      export default Routes;