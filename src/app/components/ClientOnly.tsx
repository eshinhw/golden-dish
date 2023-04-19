"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProp {
  children: React.ReactNode;
}

import React from "react";

export default function ClientOnly({ children }: ClientOnlyProp) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
}
