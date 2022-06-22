import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { routesPaths } from '../../routerSettings/settings';

export const RequireAuth = ({ children }) => {
  const status = useSelector((state) => state.auth.status);
  const location = useLocation();

  if (status === 'pending' || status === 'idle') {
    return <div>Verifying user</div>;
  }

  if (status === 'unauthorized') {
    return <Navigate to={routesPaths.login} state={location.pathname} />;
  }

  return <>{children}</>;
};
