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
                  <button className="py-[6px] px-3 rounded-md text-base text-[#3563E9] border-[#3563E9] border-[2px] relative after:content-[''] after:absolute hover:after:w-full after:bg-[#3563E9] z-10 after:left-0 after:top-0 hover:text-white after:z-[-1] hover:after:animate-line after:h-full">Login</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton appearance={{ elements: { avatarBox: "w-10 h-10", } }} />
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
