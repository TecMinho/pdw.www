import type { Metadata } from "next";
import "./globals.css";
import "./accessibility.css";
import { PdwHeader } from "@/components/layout/PdwHeader";
import { PdwFooter } from "@/components/layout/PdwFooter";
import { AccessibilityWidget } from "@/components/ui/AccessibilityWidget";

export const metadata: Metadata = {
  title: "Portuguese Digital Wallet by TecMinho",
  description: "Site da Portuguese Digital Wallet - Aprovada pela EBSI",
  icons: {
    icon: '/pdw_icon.png',
    shortcut: '/pdw_icon.png',
    apple: '/pdw_icon.png',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}
