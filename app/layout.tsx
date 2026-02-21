import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Prism-Arcana: Digital Ritual of Destiny",
    description: "A digital ritual to reveal your unique destiny shard.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
