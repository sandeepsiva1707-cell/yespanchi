import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sylendrababu.com"),
  title: "Dr. Sylendra Babu | Official Website | Author & Leadership Mentor",
  description: "Official website of Dr. Sylendra Babu, former DGP of Tamil Nadu, author, TEDx speaker, leadership mentor, and governance expert.",
  keywords: ["Sylendra Babu", "DGP Sylendra Babu", "IPS Sylendra Babu", "Tamil Nadu Police", "Officers IAS Academy", "Udalinai Urudhi Sei", "Motivational Speaker", "Leadership Mentor", "Corporate Governance"],
  authors: [{ name: "Dr. Sylendra Babu" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dr. Sylendra Babu | Official Website",
    description: "Official website of Dr. Sylendra Babu, former DGP, Tamil Nadu, author, TEDx speaker, and leadership mentor.",
    url: "https://sylendrababu.com",
    siteName: "Dr. Sylendra Babu Official",
    images: [
      {
        url: "/images/hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Sylendra Babu IPS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sylendra Babu IPS | Official Website",
    description: "Official website of Dr. C. Sylendra Babu, Former DGP, Tamil Nadu, Author, TEDx Speaker, and Leadership Mentor.",
    images: ["/images/hero-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-primary text-white">
        {children}
      </body>
    </html>
  );
}
