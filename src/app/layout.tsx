import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Brovin Henry Quadros | AI Engineer & Data Analyst",
  description:
    "Personal Portfolio of Brovin Henry Quadros – AI Engineer & Data Analyst specializing in Machine Learning, Generative AI, RAG Architectures, and Advanced Data Analytics.",
  keywords: [
    "Brovin Quadros",
    "Brovin Henry Quadros",
    "AI Engineer",
    "Data Analyst",
    "Machine Learning",
    "Generative AI",
    "LLM",
    "RAG",
    "FastAPI",
    "Python",
    "Tableau",
  ],
  authors: [{ name: "Brovin Henry Quadros" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#08090e] text-gray-100 antialiased selection:bg-sky-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
