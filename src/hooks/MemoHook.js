import { useState, useEffect, useMemo, memo } from "react";

const MemoHook = () => {
  const [number, setNumber] = useState(2);

  const [dark, setDark] = useState(false);

  // const doubleNumber = slowFunction(number);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  useEffect(() => {
    console.log("Theme changed");
  }, [dark]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num) => {
  console.log("calling slow function");
  for (let i = 0; i <= 2000000000; i++) {}
  console.log("done calling slow function");
  return num * 2;
};

export default memo(MemoHook);
