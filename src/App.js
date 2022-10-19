import React, { useState } from "react";
import data from "./dummyData/data";
import PersonItem from "./components/molecules/PersonItem";

function App() {
  const [personData, setPersonData] = useState(data);

  return (
    <div className='w-full h-screen bg-slate-300 flex flex-wrap '>
      {personData.map((person) => (
        <PersonItem key={person.id} {...person} />
      ))}
    </div>
  );
}

export default App;
