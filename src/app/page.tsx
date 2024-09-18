import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <div className="overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <Brands />
    </div>
  );
}
