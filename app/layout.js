import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social App",
  description: "Created by Max, Melissa, Craig",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
