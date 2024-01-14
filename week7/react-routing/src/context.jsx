import { createContext } from "react";

export const CountContext = createContext({
  count,
  setCount,
});
// this can be a big object aswell.
