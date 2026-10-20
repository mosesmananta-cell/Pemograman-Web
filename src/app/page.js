import Link from "next/link";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import { sekolah } from "@/data/sekolah";
import { daftarBerita } from "@/data/berita";

export default function Home() {
  const beritaTerbaru = daftarBerita.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold">Sambutan Kepala Sekolah</h2>
          <p className="mt-4 leading-relaxed text-steel">{sekolah.sambutan}</p>
          <p className="mt-4 font-bold">{sekolah.kepalaSekolah}</p>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold">Tentang Sekolah</h2>
          <p className="mt-4 leading-relaxed text-steel">{sekolah.profil}</p>
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {sekolah.statistik.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-white p-4">
                <dt className="text-3xl font-extrabold">{s.angka}</dt>
                <dd className="text-sm text-steel">{s.label}</dd>
              </div>
            ))}
          </dl>
          <Link href="/about" className="mt-6 inline-block font-bold underline decoration-signal decoration-4 underline-offset-4 hover:text-ink-soft">
            Selengkapnya tentang sekolah
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold">Berita Terbaru</h2>
          <Link href="/berita" className="rounded-lg border border-ink px-4 py-2 text-sm font-semibold transition hover:bg-ink hover:text-white">
            Lihat semua berita
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {beritaTerbaru.map((b) => (
            <BeritaCard key={b.id} berita={b} />
          ))}
        </div>
      </section>
    </>
  );
}