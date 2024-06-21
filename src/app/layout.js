import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "./footer-01/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devlytica | Software Development & Consulting Company",
  description:
    "Devlytica is a leading software development company that specializes in delivering innovative, and customized software solutions to businesses across different industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
