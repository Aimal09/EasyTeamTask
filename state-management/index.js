import React, { useReducer } from 'react';
import { Reducer } from './Reducer';
import { InitialState } from './initStates';
import { AppStateContext } from './contexts';

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
