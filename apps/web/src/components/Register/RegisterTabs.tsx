'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type RegisterTabsProps = {
  defaultType?: 'artist' | 'studio' | 'client'
  children: (selectedType: 'artist' | 'studio' | 'client') => React.ReactNode
}

const roles: ('artist' | 'studio' | 'client')[] = ['artist', 'studio', 'client']

export function RegisterTabs({ defaultType = 'artist', children }: RegisterTabsProps) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initial = (searchParams.get('type') as typeof roles[number]) || defaultType
  const [selected, setSelected] = useState<typeof roles[number]>(initial)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.set('type', selected)
    router.replace(`?${params.toString()}`, { scroll: false })
  }, [selected])

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => setSelected(role)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium",
              selected === role
                ? "bg-black text-white"
                : "bg-muted text-muted-foreground hover:bg-accent"
            )}
          >
            {role === 'artist' && 'Artist'}
            {role === 'studio' && 'Studio'}
            {role === 'client' && 'Client'}
          </button>
        ))}
      </div>
      <div>{children(selected)}</div>
    </div>
  )
}
