"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full px-6 md:py-4 lg:py-10 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          InkHost: Where Artists Guest, Studios Host & Clients Book Tattoos
        </h1>
        <p className="text-muted-foreground font-thin text-2xl">
          Connecting artists, studios, and tattoo clients — worldwide
        </p>
        <p className="text-muted-foreground text-md mt-8">
          Discover top artists, find hosting studios, and book your next tattoo — all in one place
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-3">
          <Link href="/studios">
            <Button size="lg" className="w-[240px] text-base">Explore Studios</Button>
          </Link>
          <Link href="/artists?location=nearby">
            <Button size="lg" className="w-[240px] text-base">Discover Artists</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
