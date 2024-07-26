import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './../components/navbar/page'
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./../components/AppContext"
import Footer from './../components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banker's Adda",
  description: "We cater to Finance and Loan requirements.",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="smooth-scroll">
      <AppProvider>
      
      <body className={inter.className} >
      <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        {children}
        <Footer /></body>
        </AppProvider>
        
    </html>
  );
}
