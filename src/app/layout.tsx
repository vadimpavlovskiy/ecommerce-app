import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import styles from "./page.module.css";
import './globals.css'
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "myEcommerce App",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <StyledComponentsRegistry>
        <GlobalStyles />
            <main className={styles.main}>
              {children}
            </main>
      </StyledComponentsRegistry>
        </body>
    </html>
  );
}
