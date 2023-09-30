import "./globals.scss";
import type { Metadata } from "next";
import { Content } from "@carbon/react";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import ClientComponentWrapper from "@/components/Sidebar/ClientComponentWrapper";

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
        <ClientComponentWrapper>{children}</ClientComponentWrapper>
      </body>
    </html>
  );
}
