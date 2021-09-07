import React, { useRef } from "react";
import Counter from "../components/Counter";

const HookUseImperativeHandle = () => {
  const ref = useRef();

  return (
    <div className="App">
      <button onClick={() => ref.current.handleSubstract()}>-</button>
      <Counter ref={ref} />
      <button onClick={() => ref.current.handleAdd()}>+</button>
      <br />
    </div>
  );
};

export default HookUseImperativeHandle;
