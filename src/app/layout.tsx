import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globalStyles/globals.css";
import Topbar from "../components/Topbar";

const inter = Roboto_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Marvel hero searcher",
  description:
    "This is a MArvel hero searcher for a skill assessment for Capitol Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
