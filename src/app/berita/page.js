import PageHeader from "@/components/PageHeader";
import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";

export const metadata = { title: "Berita" };

export default function BeritaPage() {
  return (
    <>
      <PageHeader judul="Berita Sekolah" deskripsi="Kabar terbaru kegiatan dan prestasi warga sekolah." />
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {daftarBerita.map((b) => (
          <BeritaCard key={b.id} berita={b} />
        ))}
      </div>
    </>
  );
}