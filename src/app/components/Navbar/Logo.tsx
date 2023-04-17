"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  return (
    <Image
      src={"/images/logo.png"}
      alt="logo"
      width={100}
      height={100}
      className="w-7 h-7 cursor-pointer md:w-10 md:h-10 lg:w-14 lg:h-14"
    />
  );
}
