import type { Metadata } from "next";
import { Lexend_Deca, Fira_Code } from "next/font/google";
import "./globals.css";

const lexend = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const fira = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee Williams",
  description: "I build fast and scalable frontends with nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${fira.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
