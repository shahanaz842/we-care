import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  display: "swap",
});


export const metadata = {
  metadataBase: new URL("https://we-care-zeta-smoky.vercel.app"),

  title: {
    default: "We Care | Trusted Caregiver Services",
    template: "%s | We Care",
  },

  description:
    "We Care provides professional baby care, elderly care, and sick patient support services with trained and compassionate caregivers.",

  keywords: [
    "Caregiver service",
    "Baby care service",
    "Elderly care service",
    "Patient care service",
    "Home nursing",
    "Home care support",
    "Professional caregivers",
  ],

  authors: [{ name: "We Care Team" }],
  creator: "We Care",
  publisher: "We Care",

  openGraph: {
    title: "We Care | Trusted Caregiver Services",
    description:
      "Professional baby care, elderly service, and sick patient support at your home.",
    url: "https://we-care-zeta-smoky.vercel.app",
    siteName: "We Care",
    images: [
      {
        url: "https://i.ibb.co/B5mC9rST/Screenshot-2026-02-23-064255.png",
        width: 1200,
        height: 630,
        alt: "We Care Home Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "We Care | Trusted Caregiver Services",
    description:
      "Compassionate and professional caregiver services for your loved ones.",
    images: [
      "https://i.ibb.co/B5mC9rST/Screenshot-2026-02-23-064255.png",
    ],
  },

  icons: {
    icon: "https://i.ibb.co/VWwC7PGB/logo.png",
    shortcut: "https://i.ibb.co/VWwC7PGB/logo.png",
    apple: "https://i.ibb.co/VWwC7PGB/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <header className=" md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className=" mx-auto min-h-[calc(100svh-302px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
