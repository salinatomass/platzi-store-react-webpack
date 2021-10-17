import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@containers/Home';
import Layout from '@components/Layout';
import NotFound from '@containers/NotFound';
import { hot } from 'react-hot-loader/root';

import { ContextProvider, useAppContext } from '@context/providers/AppContext';

const AsyncCheckoutContainer = React.lazy(() => import('@containers/Checkout'));

const App = () => {
  const { isLoading } = useAppContext();

  return (
    <>
      {!isLoading ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <ContextProvider>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/checkout"
                  component={AsyncCheckoutContainer}
                />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </ContextProvider>
        </Suspense>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
export default hot(App);
