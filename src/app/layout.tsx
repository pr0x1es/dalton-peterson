import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";

const fonts = Open_Sans(
  { subsets: ["latin"] }
);

export const metadata: Metadata = {
  title: "Dalton's ASMR",
  description: "Welcome to Dalton's ASMR this is the official website to it!",
  keywords: "dalton, asmr, daltons, asmrs,"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
