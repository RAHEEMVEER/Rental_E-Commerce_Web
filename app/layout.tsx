import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morent",
  description: "Affordable car rentals with easy booking process.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head><link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" /></head>
        <body className={inter.className}>
          <Header login={
            <>
              <SignedOut>
                <SignInButton>
                  <button className="bg-[#3563E9] p-1 rounded-full w-9 h-9 text-lg text-white"><i className="ri-user-add-line"></i></button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton appearance={{ elements: { avatarBox: "w-9 h-9", } }} />
              </SignedIn>
            </>
          } />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
};
