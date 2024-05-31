"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Providers.jsx";

// const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers Children={children}></Providers>
      </body>
    </html>
  );
}
