import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";


const inter = Inter({
    subsets: ["latin"], display: "swap",
});

export const metadata: Metadata = {
    title: "Full Calender Example",
    description: "Developed by Mugdha Rahman",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={inter.className}
        >
        {children}
        </body>
        </html>
    );
}
