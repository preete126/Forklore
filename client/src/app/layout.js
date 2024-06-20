import { Inter,Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ForkLore",
  description: "Open source grocery store, taste the tradition!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
