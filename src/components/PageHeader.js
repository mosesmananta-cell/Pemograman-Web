export default function PageHeader({ judul, deskripsi }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-extrabold md:text-4xl">{judul}</h1>
        {deskripsi && <p className="mt-3 max-w-2xl text-steel">{deskripsi}</p>}
      </div>
    </section>
  );
}