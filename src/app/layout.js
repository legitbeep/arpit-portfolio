import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DockDemo, LinksDock } from "@/components/links-dock";
import Particles from "@/components/ui/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arpit Yadav",
  description: "Arpit Yadav's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lustria&family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          {/* <LinksDock /> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
