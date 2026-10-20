"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sekolah } from "@/data/sekolah";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const aktif = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt={`Logo ${sekolah.nama}`} width={40} height={40} />
          <span className="text-lg font-extrabold">{sekolah.singkat}</span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="rounded-md border border-line px-3 py-1.5 text-sm font-semibold md:hidden"
        >
          {open ? "Tutup" : "Menu"}
        </button>

        <ul
          className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-1 border-b border-line bg-white p-4 md:static md:flex md:w-auto md:flex-row md:border-0 md:p-0`}
        >
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  aktif(item.href) ? "bg-ink text-white" : "text-steel hover:bg-paper hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}