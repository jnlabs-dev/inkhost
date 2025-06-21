"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-ful md:py-10 lg:py-20 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          InkHost: Where Artists Guest, Studios Host, and Fans Stay in the Loop
        </h1>
        <p className="text-muted-foreground text-lg">
          Connecting Tattoo Artists with Studios Worldwide — Know When Your Favorite Artist Is in Town
        </p>
        <div className="flex flex-col gap-8 pt-2 md:pt-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/studios">
              <Button size="lg" className="w-[240px] text-base">Explore Studios</Button>
            </Link>
            <Link href="/artists?location=nearby">
              <Button size="lg" className="w-[240px] text-base">Artists Visiting My City</Button>
            </Link>
          </div>
          <div className="mt-6 text-center text-muted-foreground text-lg">
            <p className="font-medium">Are you an Artist or a Studio Owner?</p>
            <p className="text-base"><span className="font-semibold">Sign up now</span> to get discovered, find hosting opportunities, or grow your network.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register?type=artist">
              <Button size="lg" variant="secondary" className="w-[220px] text-base">I’m an Artist</Button>
            </Link>
            <Link href="/register?type=studio">
              <Button size="lg" variant="secondary" className="w-[220px] text-base">I’m a Studio Owner</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
