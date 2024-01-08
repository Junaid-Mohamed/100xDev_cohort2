import React, { useState } from "react";

export function CreateTodo() {
  // react query optimal way

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleClick() {
    // console.log()
    fetch("http://localhost:3001/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(async (res) => {
      const json = await res.json();
      alert("todo got added");
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <button onClick={handleClick}>Add a todo</button>
    </div>
  );
}
