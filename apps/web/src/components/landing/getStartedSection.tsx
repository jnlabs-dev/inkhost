'use client'

import Link from "next/link"
import { Button } from "@/components/ui/base/Button"
import { HousePlus, PenTool, CircleUserRound } from "lucide-react"

export function GetStartedSection() {
  return (
    <section className="w-full py-20 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-semibold">
          Start Your InkHost Journey
        </h3>
        <p className="mt-2 text-muted-foreground">
          Sign up today to discover, host, or get tattooed — wherever you are.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/register?type=studio">
            <Button size="lg" variant="default">
              <HousePlus className="size-4" />
              I’m a Studio
            </Button>
          </Link>
          <Link href="/register?type=artist">
            <Button size="lg" variant="default">
              <PenTool className="size-4" />
              I’m an Artist
            </Button>
          </Link>
          <Link href="/register?type=client">
            <Button size="lg" variant="default">
              <CircleUserRound className="size-4" />
              I’m a Client
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
