import { Link } from "@nextui-org/react";
import React from "react";

const About: React.FC = () => {
  return (
    <main>
      <div className="mx-6 flex w-fit flex-col gap-2">
        <div>name: kei</div>
        <div>エンジニア 5 年目</div>
        <Link
          isBlock
          showAnchorIcon
          href="https://github.com/shoka6"
          target="_blank"
          color="secondary"
        >
          GitHub
        </Link>
        <Link
          isBlock
          showAnchorIcon
          href="https://qiita.com/keiliving"
          target="_blank"
          color="success"
        >
          Qiita
        </Link>
      </div>
    </main>
  );
};

export default About;
