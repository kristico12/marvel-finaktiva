import { Route, Switch, BrowserRouter } from "react-router-dom";
// views
import App from '../views/App/App';
import NotFound from '../views/NotFound/NotFound';

export const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);