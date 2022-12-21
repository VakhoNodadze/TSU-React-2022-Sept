import { useState, useEffect, useMemo, memo, useCallback } from "react";

const CallbackHook = () => {
  const [number, setNumber] = useState(2);

  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incNumber) => {
      return [number, number + incNumber, number + incNumber * 2];
    },
    [number]
  );

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default memo(CallbackHook);

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("updating items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};
