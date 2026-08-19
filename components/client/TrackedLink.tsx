// TrackedLink.tsx
"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

export default function TrackedLink({
  href,
  children,
  location,
  className
}: {
  href: string;
  children: React.ReactNode;
  location: string;
  className?: string;   
}) {
  return (
    <Link
     className={className}
      href={href}
      onClick={() =>
        sendGAEvent("event", "sign_up_click", {
          location,
        })
      }
    >
      {children}
    </Link>
  );
}