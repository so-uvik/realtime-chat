import Providers from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "Friend-Zone",
  description: "A realtime-chat application to communicate with your friends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
