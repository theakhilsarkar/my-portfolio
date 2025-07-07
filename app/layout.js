// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio made with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="">{children}</div>
        <ScrollToTop />
      </body>
    </html>
  );
}
