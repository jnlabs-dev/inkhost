'use client'

import { InfiniteLogoStrip } from "@/components/ui/infiniteLogoStrip/InfiniteLogoStrip"


const TRUSTED_BY_LIST = [
  { src: '/trustedBy/studios/tattoo-studio-2023.png', title: 'Tattoo Studio 2023' },
  { src: '/trustedBy/studios/inkredible-tattoo.png', title: 'Inkredible Tattoo Studio' },
  { src: '/trustedBy/studios/jml-tattoo.png', title: 'JML Tattoo Studio' },
  { src: '/trustedBy/studios/black-ink.png', title: 'Black Ink Tattoo Studio' },
  { src: '/trustedBy/studios/canary-tattoo.png', title: 'Canary Tattoo Studio' },
  { src: '/trustedBy/studios/inked-ritual.png', title: 'Inked Ritual Studio' },
  { src: '/trustedBy/artists/nico-valencia.png', title: 'Nico Valencia' },
  { src: '/trustedBy/studios/ink-kings.png', title: 'Ink-Kings Studio' },
  { src: '/trustedBy/studios/raluga-tattoo.png', title: 'Raluga Tattoo Studio' },
  { src: '/trustedBy/studios/tattoaria.png', title: 'Tattoaria Studio' },
  { src: '/trustedBy/studios/vikings-tattoo-rhodes.png', title: 'Vikings Tattoo Rhodes Studio' },
]

export const TrustedBySection = () => {
  return (
    <section className="py-4 md:py-8 text-center">
      <h3 className="text-2xl font-thin text-muted-foreground tracking-wide mb-4">
        Trusted by Top Tattoo Studios & Artists
      </h3>
      <div className="flex justify-center flex-wrap items-center gap-6 opacity-90">
        <InfiniteLogoStrip className="mt-2" logoList={TRUSTED_BY_LIST} />
      </div>
    </section>
  )
}
