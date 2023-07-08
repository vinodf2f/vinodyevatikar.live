import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/app/components";
import Image from "next/image";
import profilePic from "../../public/profile.jpeg";
import 'highlight.js/styles/atom-one-dark.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinod",
  description: "Frontend engineer (Monile+Web)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="appContainer">
        <Navbar />
        <div id="userInfo">
        <Image
          src={profilePic}
          width={150}
          height={150}
          alt="profile"
          className="avtarImg"
        />
        <h1>Hey, I am Vinod</h1>
        <h5>Frontend Engineer (Mobile + web)</h5>
        </div>
        <div className="children">
        {children}
        </div>
      </body>
    </html>
  );
}
