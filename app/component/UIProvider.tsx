"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type UIProviderProps = {
  children: React.ReactNode;
};

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const { push } = useRouter();
  return <NextUIProvider navigate={push}>{children}</NextUIProvider>;
};
