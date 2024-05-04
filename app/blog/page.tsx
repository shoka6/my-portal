import Link from "next/link";
import React from "react";

type Article = {
  id: number;
  title: string;
  url: string;
};

export default async function Home() {
  const staticData = await fetch(
    "https://qiita.com/api/v2/users/keiliving/items",
    { cache: "force-cache" },
  );
  const res: Article[] = await staticData.json();
  return (
    <span className="mx-6 flex flex-col gap-2">
      <h1 className="mb-4 text-2xl font-bold">Blog</h1>
      <h2 className="text-lg">Qiita</h2>
      <span className="flex flex-col gap-6">
        {res.map((article) => (
          <Link
            key={article.id}
            href={article.url}
            target="_blank"
            className="w-fit hover:text-sky-500"
          >
            {article.title}
          </Link>
        ))}
      </span>
    </span>
  );
}
