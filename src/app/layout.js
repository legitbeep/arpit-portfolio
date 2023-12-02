import { Inter } from "next/font/google";
import "./globals.css";
import ChakraWrapper from "@/components/ChakraProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arpit Yadav",
  description: "Arpit Yadav's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ChakraWrapper>{children}</ChakraWrapper>
        <Footer />
      </body>
    </html>
  );
}
