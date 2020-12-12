import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {

  useEffect(() => {
      if (!props.loggedIn) {
        props.setLoginPopupOpen(true)
      }
  }, []);

  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  )
}

export default ProtectedRoute;