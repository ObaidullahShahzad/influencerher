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
        {/* Primary favicon */}
        <link rel="icon" type="image/svg+xml" href="/Faveicon.svg" />
        <title>InfluenceHer</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
