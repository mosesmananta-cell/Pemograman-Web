import Image from "next/image";
import Link from "next/link";

export default function BeritaCard({ berita }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:border-ink hover:shadow-md">
      <div className="relative aspect-[16/10]">
        <Image
          src={berita.gambar}
          alt={berita.judul}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-sm text-steel">{berita.tanggal}</time>
        <h3 className="mt-1 text-lg font-bold leading-snug">{berita.judul}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{berita.ringkasan}</p>
        <Link
          href={`/berita/${berita.id}`}
          className="mt-4 inline-block self-start rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-soft"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}