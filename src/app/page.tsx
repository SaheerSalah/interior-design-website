import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div>welcome to interior design website</div>
    </div>
  );
}
