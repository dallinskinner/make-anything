import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Make Anything",
  description: "Make anything you want",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Navbar />
        <main className="p-5">
          <div className="w-full max-w-5xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
