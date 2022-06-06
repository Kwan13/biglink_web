import { Route, Redirect } from 'react-router-dom';
import getLoggedUser from '../utils/LoggedUser';
import { UserLoginInterface } from '../interfaces/UserInterface';

export default function Private(props: any) {
  const { component, ...rest } = props;

  const loggedUser = getLoggedUser();

  if (!loggedUser || !validateReadRole(loggedUser)) {
    return (
      <Redirect
        to={{
          pathname: '/unauthorized',
          state: { prevPath: rest.location.pathname },
        }}
      />
    );
  }

  return <Route {...rest} component={component} />;
}

function validateReadRole(user: UserLoginInterface) {
  for (let i = 0; i < user.userRole.length; i += 1) {
    if (user.userRole[i] === 'READ') return true;
  }

  return false;
}
