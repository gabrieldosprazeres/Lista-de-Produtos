import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";
import { Toaster } from "./_components/ui/sonner";

export const metadata: Metadata = {
  title: "Lista de Produtos",
  description: "Uma lista de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
