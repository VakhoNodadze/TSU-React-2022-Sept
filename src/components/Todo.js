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
    {
      id: 1,
      task: "Study Reactjs",
      isDone: false,
    },
    {
      id: 2,
      task: "Study Algorithms",
      isDone: true,
    },
    {
      id: 3,
      task: "Clearn House",
      isDone: false,
    },
  ]);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      isDone: false,
      task: userInput,
    };
    setTodoList((prev) => [...prev, newTodo]);
    setUserInput("");
  };

  const handleDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    // setTodoList((prevState) => {
    //   const newTodoList = prevState.filter((todo) => todo.id !== id);
    //   return newTodoList;
    // });
  };

  // დავალება: თუდუს დაკლიკებაზე, იცვლებოდეს მისი isDone property იმის
  // საპირისპიროდ რაც იყო.
  const handleTodoStatus = (id) => {};

  return (
    <div>
      <div className='flex w-80'>
        <input
          value={userInput}
          onChange={(e) => handleInput(e)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <button
          onClick={handleAddTodo}
          className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded'
        >
          Add Todo
        </button>
      </div>
      <ul className='flex flex-col'>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span className={todo.isDone ? "line-through" : "underline"}>
              {todo.task}
            </span>
            <span
              className='ml-4 cursor-pointer hover:text-red-600 transition-all delay-75'
              onClick={() => handleDeleteTodo(todo.id)}
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
