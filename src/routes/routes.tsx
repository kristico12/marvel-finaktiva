import { Route, Switch, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import FavoritesProvider from "@context/favorites";
// views
import App from '../views/App/App';
import NotFound from '../views/NotFound/NotFound';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

export const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <FavoritesProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </FavoritesProvider>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);