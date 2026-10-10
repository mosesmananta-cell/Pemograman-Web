import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink text-white">
      <div className="stripe" />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2">
        <div>
          <p className="text-lg font-extrabold">{sekolah.nama}</p>
          <p className="mt-2 text-sm text-white/70">{sekolah.alamat}</p>
        </div>
        <ul className="flex gap-6 text-sm font-semibold md:justify-end">
          <li><Link href="/" className="hover:text-signal">Home</Link></li>
          <li><Link href="/about" className="hover:text-signal">About</Link></li>
          <li><Link href="/berita" className="hover:text-signal">Berita</Link></li>
        </ul>
      </div>
      <p className="border-t border-white/10 px-6 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {sekolah.nama}
      </p>
    </footer>
  );
}