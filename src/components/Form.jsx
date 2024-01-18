import React, { useRef, useState } from "react";
import Todo from "./Todo";

function Form() {
  const inputText = useRef();

  const [data, setData] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    data.unshift({ todo: inputText.current.value });
    setData([...data]);
    inputText.current.value = "";
  };

  console.log(data);

  const deleteTodo = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };

  const editTodo = (index, val) => {
    data.splice(index, 1, {
      todo: val,
    });
    setData([...data]);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Enter todo"
            required
            ref={inputText}
            className="focus:outline-none border border-black p-2 rounded w-[300px]"
          />
          <button
            type="submit"
            className="bg-green-700 text-white p-2 ml-5 rounded"
          >
            Add
          </button>
        </form>
      </div>
      {data.map((item, index) => {
        return (
          <Todo
            key={index}
            todo={item.todo}
            deleteTodo={deleteTodo}
            index={index}
            editTodo={editTodo}
          />
        );
      })}
    </>
  );
}

export default Form;
