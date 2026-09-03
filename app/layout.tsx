import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kimo Emoji — SVG Emoji Library",
  description: "A delightful collection of handcrafted SVG emojis for your projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
