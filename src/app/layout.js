import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteFrame from "@/components/SiteFrame";
import { sekolah } from "@/data/sekolah";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: { default: sekolah.nama, template: `%s | ${sekolah.singkat}` },
  description: `Website profil ${sekolah.nama}. ${sekolah.tagline}.`,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="flex min-h-screen flex-col">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}