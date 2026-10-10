import Image from "next/image";
import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/sekolah.JPG"
        alt={`Gedung ${sekolah.nama}`}
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 md:py-32">
        <Image src="/logo.png" alt={`Logo ${sekolah.nama}`} width={128} height={128} className="h-20 w-20 md:h-28 md:w-28" />
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{sekolah.nama}</h1>
        <p className="max-w-xl text-lg text-white/80">{sekolah.tagline}</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/about" className="rounded-lg bg-signal px-5 py-3 font-bold text-ink transition hover:bg-yellow-300">
            Kenali sekolah kami
          </Link>
          <Link href="/berita" className="rounded-lg border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10">
            Baca berita
          </Link>
        </div>
      </div>
      <div className="stripe relative" />
    </section>
  );
}