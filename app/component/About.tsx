import Link from "next/link";

import React from "react";

const About: React.FC = () => {
  return (
    <main className="h-screen">
      <div className="mx-6 flex w-fit flex-col gap-2">
        <div>kei</div>
        <div>エンジニア 5 年目</div>
        <Link
          href="https://github.com/shoka6"
          target="_blank"
          className="flex  text-slate-500 hover:text-slate-900"
        >
          GitHub
          <svg
            aria-hidden="true"
            className="navbar_externalArrow___VWBd"
            height="7"
            viewBox="0 0 6 6"
            width="7"
          >
            <path
              d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
              fill="var(--accents-3)"
            ></path>
          </svg>
        </Link>
        <Link
          href="https://qiita.com/keiliving"
          target="_blank"
          className="flex  text-slate-500 hover:text-slate-900"
        >
          Qiita
          <svg
            aria-hidden="true"
            className="navbar_externalArrow___VWBd"
            height="7"
            viewBox="0 0 6 6"
            width="7"
          >
            <path
              d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
              fill="var(--accents-3)"
            ></path>
          </svg>
        </Link>
      </div>
    </main>
  );
};

export default About;
