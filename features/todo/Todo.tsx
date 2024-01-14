"use client";
import React, { useState } from "react";

type TodoProps = {
  id: string | number;
};

export const Todo: React.FC<TodoProps> = ({ id }) => {
  const [a, b] = useState();
  return <div key={id}>こんにちは</div>;
};
