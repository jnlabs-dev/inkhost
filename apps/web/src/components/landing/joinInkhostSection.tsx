"use client";

import Image from 'next/image';
import Link from "next/link";

type FlowCardProps = {
  imageSrc: string;
  label: string;
  focusedStateLabel: string;
  description: string;
}

const FlowCard = ({ imageSrc, label, focusedStateLabel, description }: FlowCardProps) => {
  return (
    <div className="flex flex-col items-center text-center border border-transparent hover:border-gray-300 rounded-2xl px-4 py-6 group">
      <div className="size-48 md:size-40 lg:size-56 flex items-center justify-center p-4 transition-transform duration-300 ease-in-out group-hover:scale-110">
        <Image src={imageSrc} alt={label} width={300} height={300} />
      </div>
      <h3 className="mt-4 font-bold text-lg relative">
        <span className="group-hover:hidden relative">{label}</span>
        <span className="hidden group-hover:inline-block">{focusedStateLabel}</span>
        <span className='hidden group-hover:block w-[110%] h-[1px] absolute left-[-5%] bottom-[1px] bg-gray-500' />
      </h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}

const FlowArrows = () => {
  return (
    <div className="pt-8 size-20 md:size-64">
      <Image className="rotate-90 md:rotate-0" src="/illustrations/arrows.png" alt="arrows" width={300} height={120} />
    </div>
  )
}

export function JoinInkHostSection() {
  return (
    <section className="w-full px-4 py-2">
      <div className="max-w-5xl mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-between">

        <Link href="/register?type=studio">
          <FlowCard
            imageSrc='/illustrations/tattoo-studio-illustration.png'
            label="Studio"
            focusedStateLabel="I’m a Studio Owner"
            description="Host guest artists and grow your reputation"
          />
        </Link>

        <FlowArrows />

        <Link href="/register?type=artist">
          <FlowCard
            imageSrc='/illustrations/tattoo-artist.png'
            label="Artist"
            focusedStateLabel="I’m an Artist"
            description="Find studios to guest at and get booked by clients"
          />
        </Link>

        <FlowArrows />

        <Link href="/register?type=client">
          <FlowCard
            imageSrc='/illustrations/tattoo-client.png'
            label="Client"
            focusedStateLabel="Get Tattooed"
            description='Discover artists and book your next tattoo session.'
          />
        </Link>
      </div>
    </section>
  );
}
