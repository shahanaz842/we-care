import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "We Care | Trusted Caregiving Services",
  description: "Secure and accessible care for children, elderly, and family members.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
