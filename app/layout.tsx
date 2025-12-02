import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDG Ghardaia",
  description: "Google Developer Group Ghardaia Community Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
