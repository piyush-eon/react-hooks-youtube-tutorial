import React, { createContext, useState } from "react";

export const HookDemo = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  return (
    <HookDemo.Provider value={{ count, setCount }}>
      {children}
    </HookDemo.Provider>
  );
};

export default Context;
