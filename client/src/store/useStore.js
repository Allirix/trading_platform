import React, { useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const Context = React.createContext();

const useStore = () => useContext(Context);

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store: state, dispatch }}>{children}</Context.Provider>
  );
}

// plug into the global state: const {store, dispatch} = useStore()
export default useStore;
