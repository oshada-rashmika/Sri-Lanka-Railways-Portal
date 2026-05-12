import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import TopUtilityBar from "@/components/TopUtilityBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sri Lanka Railways Portal",
  description: "Official portal for Sri Lanka Railways",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopUtilityBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
