import React, { useRef, useState } from "react";

function Todo({ todo, deleteTodo, editTodo, index }) {
  const inputValue = useRef();
  const [showModal, setShowModal] = useState(true);

  const hideTodo = () => {
    setShowModal(false);
  };

  const showTodo = () => {
    setShowModal(true);
    const val = inputValue.current.value;
    editTodo(index, val);
  };

  return showModal ? (
    <div className="flex justify-between items-center ml-[430px] rounded-md mt-5 bg-white h-fit w-[400px] p-3">
      <div>
        <p className="text-[20px]">{todo}</p>
      </div>
      <div>
        <button
          onClick={() => {
            hideTodo();
          }}
          className="p-2 bg-green-700 text-white rounded ml-2"
        >
          Edit
        </button>

        <button
          onClick={() => {
            deleteTodo(index);
          }}
          className="p-2 bg-red-600 text-white rounded ml-2"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="bg-white w-fit h-fit p-4 rounded-md ml-[430px] mt-3">
      <input
        className="border border-black mr-3 p-1 w-[300px]"
        placeholder="Enter a new Value"
        type="text"
        ref={inputValue}
      />
      <button
        className="bg-green-700 text-white p-2 rounded"
        onClick={showTodo}
      >
        Save
      </button>
    </div>
  );
}

export default Todo;
