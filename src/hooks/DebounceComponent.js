import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function DebounceComponent() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    console.log("re render", debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <div>{debouncedValue || "Initial Value"}</div>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment</button> */}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
