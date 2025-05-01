import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Roboto_Mono, Syne } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import { ThemeScript } from "@/utils/Theme";
import Hero from "@/components/Hero/page";
import SmoothScroll from "@/components/SmoothScroll/page";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body>
        <SmoothScroll>
        <div className={styles.container}>
          <Navbar />
          {/* <Hero /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
