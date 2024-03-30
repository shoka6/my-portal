import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div>name: kei</div>
      <div>エンジニア 5 年目</div>
      <a
        href="https://qiita.com/keiliving"
        target="_blank"
        rel="noreferrer"
        className="w-fit"
      >
        Qiita
      </a>
      <a
        href="https://github.com/shoka6"
        target="_blank"
        rel="noreferrer"
        className="w-fit"
      >
        GitHub
      </a>
    </main>
  );
}
