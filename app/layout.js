import Providers from "@/tools/Providers";
import "./globals.css";

export const metadata = {
  title: "Dashboard Next App",
  description: "Little dashboard app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" dir="rtl">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
