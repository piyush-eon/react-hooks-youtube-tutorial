import React, { forwardRef, useImperativeHandle, useState } from "react";

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState({
    num: 5,
    id: "abcd",
  });

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

  useImperativeHandle(ref, () => ({
    handleAdd,
    handleSubstract,
  }));

  return <span>{count.num}</span>;
});

export default Counter;
