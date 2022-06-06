import { Route, Switch } from 'react-router';
import ForgotPassword from '../pages/ForgotPassword';
import ConfirmPasswordChanged from '../pages/ForgotPassword/ConfirmPasswordChanged';
import GetCode from '../pages/ForgotPassword/GetCode';
import ChangePassword from '../pages/ForgotPassword/ChangePassword';
import Login from '../pages/Login';
import Project from '../pages/Projects/Project';
import Projects from '../pages/Projects';
import Campaign from '../pages/Campaign';
import Group from '../pages/Group';
import Advertising from '../pages/Advertising';
import Unauthorized from '../pages/Unauthorized';

import Private from './privateRoute';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/forgot-password/code/:email" exact component={GetCode} />
      <Route
        path="/forgot-password/change/:email/:code"
        exact
        component={ChangePassword}
      />
      <Route
        path="/forgot-password/changed"
        exact
        component={ConfirmPasswordChanged}
      />
      <Private path="/projects" exact component={Projects} />
      <Route path="/project/:id" exact component={Project} />
      <Route path="/campaign/:id" exact component={Campaign} />
      <Route path="/group/:id" exact component={Group} />
      <Route path="/advertising/:id" exact component={Advertising} />
      <Route path="/unauthorized" exact component={Unauthorized} />
    </Switch>
  );
}
