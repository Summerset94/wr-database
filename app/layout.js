import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../ui/Navigation";
import Header from "../ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wild Rift Database",
  description: "Wild Rift and all info on it. Created with Next-js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navigation />
        
        {children}        
      </body>
    </html>
  );
}
