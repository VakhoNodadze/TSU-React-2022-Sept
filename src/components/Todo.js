import React from "react";
import { useState } from "react";

const Todo = () => {
  // დავალება:
  // დაამატე შემოწმება რომ თო input ცარიელია, არ დაამატოს სიაში.
  // დაამატეთ ფუნქციონალი, თითოეული თასქი შესრულებულია თუ არა.
  // ანუ დიფოლტად როცა დავამატებ მე თასქს, ის უნდა იყოს შეუსრულებელი და როდესაც მასზე დავაჭერ, უნდა შესრულდეს
  // შესრულდეს ნიშნავს გამწვნადეს, ან ხაზი გადაესვას ან რამე ამდაგვარი.

  // მინიშნება. მასივში მარტივი სტრინგის ნაცვლად, რამდენიმე keyს მქონე ობიექტები უნდა ჩაწეროთ.

  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([
    "Study ReactJS",
    "Study Algorithms",
    "Clean House",
  ]);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoList((prev) => [...prev, userInput]);
    setUserInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <div className="flex w-80">
        <input
          value={userInput}
          onChange={(e) => handleInput(e)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleAddTodo}
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
        >
          Add Todo
        </button>
      </div>
      <ul className="flex flex-col">
        {todoList.map((todo, index) => (
          <li key={todo}>
            <span>{todo}</span>
            <span
              className="ml-4 cursor-pointer hover:text-red-600 transition-all delay-75"
              onClick={() => handleDeleteTodo(index)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
