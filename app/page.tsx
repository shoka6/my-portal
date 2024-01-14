import React from "react";
import { TodoList } from "../features/todo/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <TodoList />
    </main>
  );
}
