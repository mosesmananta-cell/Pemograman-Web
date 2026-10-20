"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SiteFrame({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return children;

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}