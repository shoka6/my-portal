"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  // なんかリロード走る
  Link,
  NavbarItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <Navbar>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <NavbarItem isActive={pathname === "/"}>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/skill"}>
          <Link href="/skill">Skill</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
