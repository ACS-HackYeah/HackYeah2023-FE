import "./globals.scss";
import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "ACS | HackYeah 2023",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />

        {children}
      </body>
    </html>
  );
}
