import React, { useLayoutEffect } from "react";

const HookUseLayoutEffect = () => {
  useLayoutEffect(() => {
    console.log("hello");
  }, []);

  return <div>Hello</div>;
};

export default HookUseLayoutEffect;
