'use client'

import Image from "next/image"
import { cn } from "@/lib/utils"

type InfiniteLogoStripProps = {
  className?: string;
  logoList: { src: string; title: string }[]
}

export function InfiniteLogoStrip({ className, logoList }: InfiniteLogoStripProps) {
  return (
    <div className={cn("relative overflow-hidden border-x border-white/60 h-28 w-full", className)}>
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {[...logoList, ...logoList].map(({ src, title }, idx) => (
          <div
            key={`${src}-${idx}`}
            className="flex items-center px-6 shrink-0"
          >
            <Image
              src={src}
              alt={title}
              width={300}
              height={112}
              className="h-28 w-auto object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}
