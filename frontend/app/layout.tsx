import './globals.css';
import { Web3Modal } from "../context/Web3Modal";

export const metadata = {
  title: "Web3Modal",
  description: "Web3Modal Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>GG</title>
      </head>
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
