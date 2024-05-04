import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500">
      <div className="mx-auto flex items-center border-b border-slate-900/10 px-8 py-4">
        <nav className="ml-auto font-semibold leading-6 text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-8 text-sm">
            <li className="hover:text-sky-500 dark:hover:text-sky-400">
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li className="hover:text-sky-500 dark:hover:text-sky-400">
              <Link href="/skill">Skill</Link>
            </li>
          </ul>
        </nav>
        <a
          href="https://github.com/shoka6"
          target="_blank"
          rel="noreferrer"
          className="ml-6 block text-slate-400 hover:text-slate-500"
        >
          <GitHubIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
