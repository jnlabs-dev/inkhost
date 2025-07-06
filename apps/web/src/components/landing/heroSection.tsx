"use client";

import { Compass, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/base/Button";

export function HeroSection() {
  return (
    <section className="w-full px-6 py-6 lg:py-10 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          InkHost: Where Artists Guest, Studios Host & Clients Book Tattoos
        </h1>
        <h2 className="text-muted-foreground font-thin text-2xl">
          Connecting Artists, Studios, and Tattoo Clients — worldwide
        </h2>
        <p className="text-muted-foreground text-md mt-8">
          Discover top Artists, find hosting Studios, and book your next tattoo — all in one place
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-3">
          <Link href="/studios">
            <Button size="lg" className="w-[240px] text-base">
              <Compass />
              Explore Studios
            </Button>
          </Link>
          <Link href="/artists?location=nearby">
            <Button size="lg" className="w-[240px] text-base">
              <Search />
              Discover Artists
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
