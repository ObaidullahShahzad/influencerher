import "./globals.css";
import "./font.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/faveicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
