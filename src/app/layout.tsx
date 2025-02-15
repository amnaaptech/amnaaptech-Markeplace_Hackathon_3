// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import Navbar from './components/Header';
// import Footer from './components/Footer';
// import { Geist, Geist_Mono } from "next/font/google";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
 
//     <ClerkProvider>
//     <html lang="en">
//       <body>
//         <Navbar/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   </ClerkProvider>
//   )
// };

import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Header';
import Footer from './components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
