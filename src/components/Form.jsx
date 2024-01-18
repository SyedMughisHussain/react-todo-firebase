import React, { useRef, useState } from "react";

function Form() {
  const inputText = useRef();

  const [data, setData] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter todo"
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
  );
}

export default Form;
