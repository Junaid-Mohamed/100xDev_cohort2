import { createContext } from "react";

// export const CountContext = createContext(0);
// this can be a big object aswell.

export const CountContextObject = createContext({
  count: 0,
  setCount: () => {},
});
