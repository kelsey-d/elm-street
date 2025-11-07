import type { Metadata } from "next";
import {
  Sofia_Sans,
  Sofia_Sans_Extra_Condensed,
  Romanesco,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header>
          <nav>
            <ul className="flex gap-8 items-baseline p-8">
              <li>
                <Link
                  href="/"
                  className="font-condensed text-[#FF5500] italic text-4xl"
                >
                  ElmStreet
                </Link>
              </li>
              {["buy", "rent", "sell"].map((page) => (
                <li key={page}>
                  <Link href={`/`} className="font-condensed uppercase text-lg">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
