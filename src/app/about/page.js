import PageHeader from "@/components/PageHeader";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: "About" };

function Daftar({ items }) {
  return (
    <ul className="mt-4 space-y-2 text-steel">
      {items.map((item) => (
        <li key={item} className="border-l-4 border-signal pl-3">{item}</li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader judul={`Tentang ${sekolah.nama}`} deskripsi={sekolah.tagline} />

      <div className="mx-auto max-w-6xl space-y-14 px-6 py-12">
        <section className="max-w-3xl">
          <h2 className="text-2xl font-extrabold">Profil Sekolah</h2>
          <p className="mt-4 leading-relaxed text-steel">{sekolah.profil}</p>
        </section>

        <section className="max-w-3xl">
          <h2 className="text-2xl font-extrabold">Sejarah</h2>
          {sekolah.sejarah.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-steel">{p}</p>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-ink p-8 text-white">
            <h2 className="text-2xl font-extrabold">Visi</h2>
            <p className="mt-4 leading-relaxed text-white/80">{sekolah.visi}</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-8">
            <h2 className="text-2xl font-extrabold">Misi</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-steel">
              {sekolah.misi.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold">Program Keahlian</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {sekolah.programKeahlian.map((p) => (
              <div key={p.nama} className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-bold">{p.nama}</h3>
                <p className="mt-2 text-sm text-steel">{p.deskripsi}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl">
  <h2 className="text-2xl font-extrabold">Fasilitas</h2>
  <Daftar items={sekolah.fasilitas} />
</section>

<section>
  <h2 className="text-2xl font-extrabold">Ekstrakurikuler</h2>
  <ul className="mt-4 flex flex-wrap gap-2">
    {sekolah.ekskul.map((e) => (
      <li
        key={e}
        className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold transition hover:border-ink hover:bg-ink hover:text-white"
      >
        {e}
      </li>
    ))}
  </ul>
</section>
      </div>
    </>
  );
}