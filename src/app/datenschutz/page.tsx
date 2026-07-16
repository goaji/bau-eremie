import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Datenschutz from "@/components/Datenschutz";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß Art. 13 DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div>
      <Header />
      <Datenschutz />
      <Footer />
    </div>
  );
}
