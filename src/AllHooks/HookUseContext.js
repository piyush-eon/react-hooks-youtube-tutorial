import { useContext, useState } from "react";
import { HookDemo } from "../Context";

function HookUseContext() {
  //   const [count, setCount] = useState({
  //     num: 1,
  //     id: "abcd",
  //   });

  const { count, setCount } = useContext(HookDemo);

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleAdd}>+</button>
    </>
  );
}

export default HookUseContext;
