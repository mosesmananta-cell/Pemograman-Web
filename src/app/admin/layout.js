import Image from "next/image";
import Link from "next/link";
import { sekolah } from "@/data/sekolah";

const navigation = [
	{ href: "/admin", label: "Ringkasan" },
	{ href: "/admin/berita", label: "Berita sekolah" },
	{ href: "/about", label: "Profil sekolah" },
];

export default function AdminLayout({ children }) {
	return (
		<div className="min-h-screen bg-[#f1f4f1] text-ink lg:grid lg:grid-cols-[248px_minmax(0,1fr)]">
			<aside className="flex flex-col border-b border-line bg-white lg:min-h-screen lg:border-b-0 lg:border-r">
				<Link href="/admin" className="flex items-center gap-3 border-b border-line px-5 py-5">
					<Image src="/logo.png" alt={`Logo ${sekolah.nama}`} width={42} height={42} />
					<span className="min-w-0">
						<span className="block text-sm font-extrabold">Panel Admin</span>
						<span className="block truncate text-xs text-steel">{sekolah.singkat}</span>
					</span>
				</Link>

				<div className="px-5 pb-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-steel">
					Menu utama
				</div>
				<nav aria-label="Navigasi admin" className="flex gap-1 overflow-x-auto px-3 pb-4 lg:flex-col">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`shrink-0 rounded-md px-3 py-2.5 text-sm font-semibold transition hover:bg-[#f1f4f1] hover:text-ink ${
								item.href === "/admin" ? "bg-ink text-white hover:bg-ink-soft hover:text-white" : "text-steel"
							}`}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="mt-auto hidden border-t border-line p-5 lg:block">
					<p className="text-xs font-semibold text-steel">Akses cepat</p>
					<Link href="/" className="mt-2 inline-flex text-sm font-bold text-ink underline decoration-signal decoration-2 underline-offset-4">
						Kunjungi website
					</Link>
				</div>
			</aside>

			<div className="min-w-0">
				<header className="flex min-h-16 items-center justify-between border-b border-line bg-white px-5 sm:px-8">
					<p className="text-sm font-semibold text-steel">Administrasi website</p>
					<Link href="/" className="text-sm font-bold text-ink hover:underline">
						Lihat website <span aria-hidden="true">↗</span>
					</Link>
				</header>
				<main className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
					{children}
				</main>
			</div>
		</div>
	);
}
