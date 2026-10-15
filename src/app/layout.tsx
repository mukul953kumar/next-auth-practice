import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "../ClientProvider";



export const metadata: Metadata = {
  title: "Auth Project",
  description: "Full stack auth project",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
