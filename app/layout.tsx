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
        <link rel="icon" type="image/svg+xml" href="/faveicon.svg" />

        {/* Fallback favicon for older browsers */}
        <link rel="alternate icon" href="/faveicon.svg" />

        {/* Optional: Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/faveicon.svg" />

        <title>Your App Name</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
