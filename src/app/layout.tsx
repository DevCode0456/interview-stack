import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Stack",
  description: "related to interview questions",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dvgpgzibx/image/upload/v1748116672/AQNqaKQnWU3V_X5dZJtmPmiqdiVyyjWfiICyRUUfjwd8T4tdE7ZLrusIL4Rob4uqywaOJK3pjuucwVp66Njo1FOTtj0iWBAmezMiTznaYB-QNt9KI2SP0e22Jvzd2T688IvGdcsgsZ8fxzlPugEqaLXQaqu6ag-removebg-preview_1_f6cp2r.png",
        type: "image/x-icon",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <Toaster />
        {children}
      </body>
    </html>
  );
}
