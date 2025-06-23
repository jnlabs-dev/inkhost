"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JoinInkHostSection() {
  return (
    <section className="w-full px-6 md:py-4 lg:py-10 text-center">
      <div className="text-center text-muted-foreground text-lg">
        <p className="text-medium">Whether you're an artist looking to grow, a studio ready to host, or a client seeking your next tattoo — we've got you covered.</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
        <Link href="/register?type=studio">
          <Button size="lg" variant="secondary" className="w-[240px] text-base">I’m Looking to Get Tattooed</Button>
        </Link>
        <Link href="/register?type=artist">
          <Button size="lg" variant="secondary" className="w-[240px] text-base">I’m an Artist</Button>
        </Link>
        <Link href="/register?type=studio">
          <Button size="lg" variant="secondary" className="w-[240px] text-base">I’m a Studio Owner</Button>
        </Link>
      </div>
    </section>
  );
}
