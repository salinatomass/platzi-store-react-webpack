import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

import {
  ContextProvider,
  useAppContext,
} from '../context/providers/AppContext';

const App = () => {
  const { isLoading } = useAppContext();

  return (
    <>
      {!isLoading ? (
        <ContextProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ContextProvider>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
export default App;
