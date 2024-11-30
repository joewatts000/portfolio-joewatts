import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joe Watts: Developer',
  description: 'Joe Watts is a passionate full-stack developer with expertise in modern web technologies. He specializes in building scalable applications using React, Next.js, and Node.js. With a strong foundation in both frontend and backend development, he creates seamless user experiences backed by robust server architectures.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}