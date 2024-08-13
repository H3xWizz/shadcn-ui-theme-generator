import type { Metadata } from "next";
import {Rubik} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Styles} from "@/components/styles";
import {ColorProvider} from "@/components/theme-color-provider";
import Script from "next/script";
import MobileInfo from "@/components/mobile-info";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theme generator for shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        {process.env.NEXT_PUBLIC_ANALYTICS_TOKEN && (
          <Script
            src="https://cdn.rscl.it/ra.js"
            data-token={process.env.NEXT_PUBLIC_ANALYTICS_TOKEN}
            strategy="afterInteractive"
          />
        )}
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
        >
          <ColorProvider>
            <Styles/>
            <MobileInfo/>
            {children}
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
