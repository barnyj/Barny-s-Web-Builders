// app/head.tsx
"use client";

import { usePathname } from "next/navigation";

export default function Head() {
  const path = usePathname() || "";
  const canonical = `https://barnyswebbuilders.site${path}`;
  return (
    <>
      <link rel="canonical" href={canonical} />
      {/* …other global <meta> tags… */}
    </>
  );
}
