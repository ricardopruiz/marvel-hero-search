import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globalStyles/globals.css";
import Topbar from "../components/Topbar";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-default",
});

export const metadata: Metadata = {
  title: "Marvel hero searcher",
  description:
    "This is a Marvel hero searcher for a skill assessment for Capitol Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClassNames = [robotoCondensed.className, robotoCondensed.variable];
  return (
    <>
      <html lang="en">
        <body className={fontClassNames.join(" ")}>
          <Topbar />
          {children}
        </body>
      </html>
    </>
  );
}
