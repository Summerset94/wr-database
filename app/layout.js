import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../ui/Navigation";
import Header from "../ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wild Rift QUick Maths",
  description: "League of Legends: Wild Rift Winrates and interactive build calculator",
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
