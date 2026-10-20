import Image from "next/image";
import Link from "next/link";
import { daftarBerita } from "@/data/berita";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: "Dashboard Admin" };

export default function AdminPage() {
	const beritaTerbaru = daftarBerita.slice(0, 4);
	const statistik = [
		{ label: "Berita dipublikasikan", nilai: daftarBerita.length, catatan: "Konten tersedia" },
		{ label: "Program keahlian", nilai: sekolah.programKeahlian.length, catatan: "Program sekolah" },
		{ label: "Fasilitas sekolah", nilai: sekolah.fasilitas.length, catatan: "Informasi profil" },
		{ label: "Akreditasi", nilai: sekolah.akreditasi, catatan: "Status sekolah" },
	];

	return (
		<div className="space-y-8">
			<section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52736d]">Dashboard</p>
					<h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Selamat datang, Admin</h1>
					<p className="mt-2 max-w-2xl text-sm leading-6 text-steel">
						Ringkasan konten dan informasi {sekolah.nama}.
					</p>
				</div>
				<Link
					href="/berita"
					className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-ink px-4 text-sm font-bold text-white transition hover:bg-ink-soft sm:self-auto"
				>
					Buka halaman berita <span aria-hidden="true">↗</span>
				</Link>
			</section>

			<section aria-label="Statistik website" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
				{statistik.map((item, index) => (
					<article key={item.label} className="border border-line bg-white p-5">
						<div className="flex items-start justify-between gap-3">
							<p className="max-w-[12rem] text-sm font-semibold leading-5 text-steel">{item.label}</p>
							<span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${index === 3 ? "bg-[#d3a400]" : "bg-[#5a8c7e]"}`} />
						</div>
						<p className="mt-5 text-3xl font-extrabold tabular-nums">{item.nilai}</p>
						<p className="mt-1 text-xs text-steel">{item.catatan}</p>
					</article>
				))}
			</section>

			<div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.8fr)]">
				<section className="min-w-0 border border-line bg-white">
					<div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
						<div>
							<h2 className="font-extrabold">Berita terbaru</h2>
							<p className="mt-1 text-xs text-steel">Konten yang tampil pada website sekolah</p>
						</div>
						<Link href="/admin/berita" className="text-sm font-bold text-ink underline decoration-signal decoration-2 underline-offset-4">
							Lihat semua
						</Link>
					</div>
					<div className="divide-y divide-line">
						{beritaTerbaru.map((berita) => (
							<article key={berita.id} className="flex gap-4 px-5 py-4 sm:px-6">
								<Image
									src={berita.gambar.toLowerCase()}
									alt=""
									width={112}
									height={80}
									className="h-20 w-24 shrink-0 object-cover sm:w-28"
								/>
								<div className="min-w-0 flex-1">
									<p className="text-xs font-semibold text-[#52736d]">{berita.tanggal}</p>
									<h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5">{berita.judul}</h3>
									<p className="mt-1 line-clamp-1 text-xs text-steel">{berita.ringkasan}</p>
								</div>
								<Link
									href={`/berita/${berita.id}`}
									aria-label={`Baca berita: ${berita.judul}`}
									className="hidden self-center text-sm font-bold text-ink hover:underline sm:block"
								>
									Buka <span aria-hidden="true">↗</span>
								</Link>
							</article>
						))}
					</div>
				</section>

				<aside className="space-y-6">
					<section className="border border-line bg-white p-5 sm:p-6">
						<p className="text-xs font-bold uppercase tracking-[0.14em] text-[#52736d]">Profil sekolah</p>
						<h2 className="mt-3 text-lg font-extrabold">{sekolah.nama}</h2>
						<p className="mt-2 text-sm leading-6 text-steel">{sekolah.alamat}</p>
						<div className="mt-5 border-t border-line pt-4">
							<p className="text-xs font-semibold text-steel">Kepala sekolah</p>
							<p className="mt-1 text-sm font-bold">{sekolah.kepalaSekolah}</p>
						</div>
						<Link href="/about" className="mt-5 inline-flex text-sm font-bold text-ink underline decoration-signal decoration-2 underline-offset-4">
							Lihat profil sekolah <span aria-hidden="true" className="ml-1">↗</span>
						</Link>
					</section>

					<section className="border-l-4 border-signal bg-[#e7eeea] p-5 sm:p-6">
						<p className="text-xs font-bold uppercase tracking-[0.14em] text-[#52736d]">Catatan</p>
						<p className="mt-2 text-sm leading-6 text-ink">
							Dashboard ini menampilkan data lokal website. Perubahan konten dan pengelolaan akun belum tersedia.
						</p>
					</section>
				</aside>
			</div>
		</div>
	);
}
