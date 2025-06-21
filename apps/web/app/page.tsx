import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <Shell>
      <Hero />
    </Shell>
  );
}