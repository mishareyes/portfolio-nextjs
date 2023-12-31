import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { strings as s } from "./constants";

export const metadata: Metadata = {
  title: "Misha Reyes",
  description: "Generated by NextJS + TailwindCSS + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="bg-background">
        <nav className="bg-nav sticky top-0 w-full flex flex-wrap border-b-2 border-black justify-between backdrop-blur-sm">
          <a href="#">
            <h2
              className={`font-serif text-4xl tracking-wider p-2 px-6 duration-300 
              hover:drop-shadow-xl hover:text-white active:text-background`}>
              {s.misha.toLowerCase()}
            </h2>
          </a>
        </nav>
        <div className="bg-background max-w-5xl mx-auto py-10">
          <main className="py-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
