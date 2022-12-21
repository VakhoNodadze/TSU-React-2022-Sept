import { useState } from "react";
import useToggle from "./useToggle";

export default function ToggleComponent() {
  // const [value, setValue] = useState(false);

  const [value, toggleValue] = useToggle(false);

  console.log(value);

  return (
    <div>
      <h1>Toggle Component</h1>
      <div>{value.toString()}</div>
      <button onClick={() => toggleValue()}>Toggle Value</button>
      <button onClick={() => toggleValue(true)}>Change to True</button>
      <button onClick={() => toggleValue(false)}>Change to False</button>
    </div>
  );
}
