import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarBerita } from "@/data/berita";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const berita = daftarBerita.find((b) => b.id === id);
  return { title: berita ? berita.judul : "Berita tidak ditemukan" };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const berita = daftarBerita.find((b) => b.id === id);

  if (!berita) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{berita.judul}</h1>
      <time className="mt-3 block text-steel">{berita.tanggal}</time>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-line">
        <Image src={berita.gambar} alt={berita.judul} fill priority sizes="768px" className="object-cover" />
      </div>

      <div className="mt-8 space-y-5 leading-relaxed text-steel">
        {berita.isi.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <Link href="/berita" className="mt-10 inline-block rounded-lg bg-ink px-5 py-3 font-semibold text-white transition hover:bg-ink-soft">
        Kembali ke Berita
      </Link>
    </article>
  );
}