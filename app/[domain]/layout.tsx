import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
  description: "Test Login",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased dark:bg-black",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
