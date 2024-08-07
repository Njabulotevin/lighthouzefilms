import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { AlignRight } from "lucide-react";
import NavBar from "./NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Light Houze Films",
  description:
    "LightHouze Multimedia founded by Khanyi Nxumalo is a company specializing in the film and television industry, with a strong focus on series producing and consulting. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }} className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
