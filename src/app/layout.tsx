import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";

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
          {children}
      </StyledComponentsRegistry>
        </body>
    </html>
  );
}
