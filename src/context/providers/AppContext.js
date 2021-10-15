import React, { useEffect } from 'react';
import { createContext, useContext, useReducer } from 'react';
import { appReducer, initialState } from '../reducers';
import getData from '../../utils/getData';
import { appActions } from '../actions';
import { v4 as uuid } from 'uuid';

const AppContext = createContext(initialState);

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const loadProducts = async () => {
    dispatch({ type: appActions.LOAD_PRODUCTS });

    try {
      const products = await getData();
      dispatch({ type: appActions.LOAD_PRODUCTS_SUCCESS, payload: products });
    } catch (err) {
      dispatch({ type: appActions.LOAD_PRODUCTS_ERROR, payload: err.message });
    }
  };

  const addToCart = product => {
    const newId = uuid();

    dispatch({
      type: appActions.ADD_TO_CART,
      payload: { ...product, id: newId },
    });
  };

  const removeFromCart = product =>
    dispatch({ type: appActions.REMOVE_FROM_CART, payload: product });

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, loadProducts, addToCart, removeFromCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
