import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrayanshi Tomar | PM & AI Enthusiast",
  description:
    "Product Manager & AI Enthusiast. MEM candidate @ Duke University. Ex-SpiceJet, Rapipay. Building AI-native products.",
  keywords: ["Product Manager", "AI PM", "Duke MEM", "Technical Program Manager", "Shrayanshi Tomar"],
  openGraph: {
    title: "Shrayanshi Tomar | PM & AI Enthusiast",
    description: "Product Manager & AI Enthusiast. MEM @ Duke University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise">
        {children}
      </body>
    </html>
  );
}
