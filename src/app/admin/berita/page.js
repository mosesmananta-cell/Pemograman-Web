import Image from "next/image";
import Link from "next/link";
import { daftarBerita } from "@/data/berita";

export const metadata = { title: "Berita Sekolah | Admin" };

export default function AdminBeritaPage() {
	return (
		<div className="space-y-7">
			<div className="flex flex-wrap items-end justify-between gap-4">
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52736d]">Konten website</p>
					<h1 className="mt-2 text-3xl font-extrabold tracking-tight">Berita sekolah</h1>
					<p className="mt-2 text-sm text-steel">{daftarBerita.length} artikel tersedia di website.</p>
				</div>
				<Link href="/admin" className="text-sm font-bold text-ink underline decoration-signal decoration-2 underline-offset-4">
					Kembali ke ringkasan
				</Link>
			</div>

			<section className="overflow-hidden border border-line bg-white" aria-label="Daftar berita sekolah">
				<div className="hidden grid-cols-[minmax(0,1fr)_160px_100px] gap-4 border-b border-line bg-[#f8faf8] px-5 py-3 text-xs font-bold uppercase tracking-wide text-steel sm:grid sm:px-6">
					<span>Artikel</span>
					<span>Tanggal</span>
					<span>Aksi</span>
				</div>
				<div className="divide-y divide-line">
					{daftarBerita.map((berita) => (
						<article key={berita.id} className="grid gap-3 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_160px_100px] sm:items-center sm:gap-4 sm:px-6">
							<div className="flex min-w-0 items-center gap-4">
								<Image
									src={berita.gambar.toLowerCase()}
									alt=""
									width={96}
									height={68}
									className="h-16 w-20 shrink-0 object-cover"
								/>
								<div className="min-w-0">
									<h2 className="line-clamp-2 text-sm font-bold leading-5">{berita.judul}</h2>
									<p className="mt-1 line-clamp-1 text-xs text-steel">{berita.ringkasan}</p>
								</div>
							</div>
							<time className="text-xs font-medium text-steel">{berita.tanggal}</time>
							<Link href={`/berita/${berita.id}`} className="text-sm font-bold text-ink hover:underline">
								Pratinjau <span aria-hidden="true">↗</span>
							</Link>
						</article>
					))}
				</div>
			</section>

			<p className="border-l-4 border-signal bg-[#e7eeea] px-4 py-3 text-sm leading-6 text-ink">
				Daftar ini bersumber dari data lokal proyek. Tambah, ubah, dan hapus berita belum terhubung ke penyimpanan.
			</p>
		</div>
	);
}
