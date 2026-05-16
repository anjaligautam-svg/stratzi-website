import type { Metadata } from "next";
import { Montserrat, Inter, Quicksand } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stratzi — The AI-Native Business OS for MSMEs",
  description:
    "Stratzi builds the AI operations layer for SaaS-enabled MSMEs — a company brain, agentic employees, and learning loops that make your business smarter the longer it runs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-body">
        {children}
      </body>
    </html>
  );
}
