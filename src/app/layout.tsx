import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Golden Dish",
  description: "Premium Dining Experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
