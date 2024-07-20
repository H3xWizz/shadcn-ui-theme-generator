import type { Metadata } from "next";
import {Rubik} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Styles} from "@/components/styles";
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
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <Styles/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
