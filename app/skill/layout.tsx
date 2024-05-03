import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
      {children}
    </div>
  );
}

// <div>
// <div className="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[13rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block">
//   <nav>aaa</nav>
// </div>
// <div className="lg:pl-[13.5rem]">
//   <div className="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
//     {children}
//   </div>
// </div>
// </div>
