import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggleValue(newValue) {
    setValue((curValue) =>
      typeof newValue === "boolean" ? newValue : !curValue
    );
  }

  return [value, toggleValue];
}
