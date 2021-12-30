import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import { DynamicForm, FormikAbstractation, 
  FormikBasicPage, 
  FormikComponents, 
  FormikYupPage, 
  RegisterFormikPage, 
  RegisterPage, 
  Users} from '../pages';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" activeClassName="nav-active" exact>Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" activeClassName="nav-active" exact>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-abstractation">
            <FormikAbstractation />
          </Route>
          <Route path="/register-formik">
            <RegisterFormikPage />
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}