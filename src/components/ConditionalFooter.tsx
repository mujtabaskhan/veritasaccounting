"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const HIDDEN_FOOTER_PATHS = ["/about"];

export default function ConditionalFooter() {
  const pathname = usePathname();

  const shouldHideFooter = HIDDEN_FOOTER_PATHS.some((path) =>
    pathname.startsWith(path),
  );

  return <Footer />;
}
