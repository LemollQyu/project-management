import { Inter } from "next/font/google";
import "./globals.css";
import NavLayout from "./layout/layout"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
		<NavLayout />
		
		<div className="mt-10 border px-6 md:px-0 lg:w-1/2 md:w-3/4 w-full mx-auto pt-5 overflow-x-hidden">
	  {children}
		</div>
	  </body>
    </html>
  );
}