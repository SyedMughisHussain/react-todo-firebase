import React from "react";

function Todo({ todo, deleteTodo, editTodo ,  index }) {
  return (
    <div className="flex justify-between items-center ml-[430px] rounded-md mt-5 bg-white h-fit w-[400px] p-3">
      <div>
        <p className="text-[20px]">{todo}</p>
      </div>
      <div>
        <button onClick={()=>{
            editTodo(index)
        }} className="p-2 bg-green-700 text-white rounded ml-2">
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
  );
}

export default Todo;
