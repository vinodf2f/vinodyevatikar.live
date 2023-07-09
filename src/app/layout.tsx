import "./globals.css";
import { Head, Navbar } from "@/app/components";
import Image from "next/image";
import profilePic from "../../public/profile.jpeg";
import "highlight.js/styles/atom-one-dark.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="appContainer">
        <Navbar />
        <div id="userInfo">
          <Image
            src={profilePic}
            width={150}
            height={150}
            alt="profile"
            className="avtarImg"
            loading='eager'
          />
          <h1>Hey, I am Vinod</h1>
          <h5>Frontend Engineer (Mobile + web)</h5>
        </div>
        <div className="children">{children}</div>
      </body>
    </html>
  );
}
