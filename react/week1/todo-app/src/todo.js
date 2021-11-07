import React from "react";

const Todo = () => {
  const todoDetails = [
    {
      id: 1,
      description: "Get out of bed",
      deadline: "Wed Sep 13 2017",
    },
    {
      id: 2,
      description: "Brush teeth",
      deadline: "Thu Sep 14 2017",
    },
    {
      id: 3,
      description: "Eat breakfast",
      deadline: " Fri Sep 15 2017",
    },
  ];
  console.log(todoDetails);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoDetails.map((todo, i) => (
          <li key={i}>
            {todo.description}
            <span> | </span> {todo.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
