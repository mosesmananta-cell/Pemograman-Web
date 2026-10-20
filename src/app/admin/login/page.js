import Link from "next/link";

export const metadata = { title: "Akses Admin" };

export default function AdminLoginPage() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-[#f1f4f1] px-5 py-12 text-ink">
			<section className="w-full max-w-md border border-line bg-white p-7 sm:p-9">
				<p className="text-xs font-bold uppercase tracking-[0.16em] text-[#52736d]">Panel Admin</p>
				<h1 className="mt-3 text-2xl font-extrabold">Akses admin belum aktif</h1>
				<p className="mt-3 text-sm leading-6 text-steel">
					Website ini belum memiliki autentikasi atau akun admin. Jangan gunakan dashboard untuk mengelola data privat sebelum sistem login dikonfigurasi.
				</p>
				<Link
					href="/"
					className="mt-6 inline-flex min-h-11 items-center rounded-md bg-ink px-4 text-sm font-bold text-white hover:bg-ink-soft"
				>
					Kembali ke website
				</Link>
			</section>
		</main>
	);
}
