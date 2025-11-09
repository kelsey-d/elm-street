import type { Metadata } from "next";
import {
  Sofia_Sans,
  Sofia_Sans_Extra_Condensed,
  Romanesco,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "./components/NavigationMenu";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  variable: "--font-sofia-sans-extra-condensed",
  subsets: ["latin"],
});

const romanesco = Romanesco({
  variable: "--font-romanesco",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElmStreet | Frightening Home Finds ",
  description: "Search dozens of haunted real estate listings in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiaSans.variable} ${sofiaSansExtraCondensed.variable} ${romanesco.variable} antialiased`}
      >
        <div className="absolute -z-10 h-3/4 w-full">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#00080e] z-10" />
          <Image
            src="/misty-forest.jpg"
            alt=""
            width={1246}
            height={531}
            className="h-full w-full object-cover object-left"
          />
        </div>
        <a href="#main-content" className="fixed sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <header className="w-full flex justify-between items-center px-8 pt-8 md:fixed md:gap-4 md:justify-start">
          <Link
            href="/"
            className="font-condensed text-crimson italic text-4xl"
          >
            ElmStreet
          </Link>
          <NavigationMenu />
        </header>
        <main
          id="main-content"
          tabIndex={0}
          className="w-full flex-1 flex flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
