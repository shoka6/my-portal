"use client";
import React, { useState } from "react";
import { Todo } from "./Todo";

export const TodoList: React.FC = () => {
  const [a, b] = useState();
  return (
    <div className="flex flex-col">
      {[1, 2, 3].map((value) => (
        <Todo id={value} key={value} />
      ))}
    </div>
  );
};
