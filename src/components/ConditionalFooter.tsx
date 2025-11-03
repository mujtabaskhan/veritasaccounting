"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const HIDDEN_FOOTER_PATHS = ["/about"];

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Check if current path should hide footer
  const shouldHideFooter = HIDDEN_FOOTER_PATHS.some((path) =>
    pathname.startsWith(path),
  );

  if (shouldHideFooter) {
    return null;
  }

  return <Footer />;
}
