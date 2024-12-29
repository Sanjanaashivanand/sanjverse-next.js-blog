import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <NavBar/>
        <div className="p-5">{children}</div> 
      </body>
    </html>
  );
}