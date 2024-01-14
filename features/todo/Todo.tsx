"use client";
import React from "react";

type TodoProps = {
  id: string | number;
};

export const Todo: React.FC<TodoProps> = ({ id }) => {
  return <div key={id}>こんにちは</div>;
};
