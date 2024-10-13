import localFont from "next/font/local";
import "./globals.css";
import Header from "./utility/layout/header";
import { Inter, Poppins } from "next/font/google";
import Footer from "./utility/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })


export const metadata = {
  title: {
    default: "Valarpirai Electronics",
    template: "%s - Valarpirai Electronics",
    
  },
  icons: {
    icon: '/assets/images/favicon.png'
  },
  description: "Pest Control Products - Paradise Pest",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
