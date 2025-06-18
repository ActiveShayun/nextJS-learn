import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ['400', '600', '600'],
  subsets: ["latin"],
})




export const metadata = {
  title: {
    default: 'Learning NextJS',
    template: '%s | Learning NextJS'
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  description: "Trying to NextJS on the best way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <NavBar />
        <main className="h-screen max-h-[500px]">
          {children}
        </main>
        <footer className="bg-slate-400 text-center text-black">
          Awesome nextjs project
        </footer>
      </body>
    </html>
  );
}
