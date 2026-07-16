import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Impressum from "@/components/Impressum";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung nach § 5 DDG.",
};

export default function ImpressumPage() {
  return (
    <div>
      <Header />
      <Impressum />
      <Footer />
    </div>
  );
}
