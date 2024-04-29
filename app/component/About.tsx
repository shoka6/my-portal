import Link from "next/link";

import React from "react";

const About: React.FC = () => {
  return (
    <main>
      <div className="mx-6 flex w-fit flex-col gap-2">
        <div>name: kei</div>
        <div>エンジニア 5 年目</div>
        <Link href="https://github.com/shoka6" target="_blank">
          GitHub
        </Link>
        <Link href="https://qiita.com/keiliving" target="_blank">
          Qiita
        </Link>
      </div>
    </main>
  );
};

export default About;
