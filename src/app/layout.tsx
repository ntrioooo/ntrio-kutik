import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const interFont = localFont({
  src: "../../public/fonts/inter-var-latin.woff2",
  variable: "--font-inter",
});

const plusJakarta = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ntriodev",
  description: "ntriodev personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
