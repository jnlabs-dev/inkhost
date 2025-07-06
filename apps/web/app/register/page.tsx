'use client'

import { RegisterTabs } from '@/components/Register/RegisterTabs'

export default function RegisterPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Create Your InkHost Account</h1>
        <p className="mt-2 text-muted-foreground text-base md:text-lg">
          Join as an artist, studio, or client — start your tattoo journey today.
        </p>
      </div>

      <div className="mt-10 max-w-xl mx-auto">
        <RegisterTabs>
          {(selectedType) => (
            <div className="mt-6">
              {/* TODO: Replace with actual form based on selectedType */}
              <div className="p-6 rounded-lg border bg-background shadow">
                <p className="text-center text-muted-foreground">
                  Registration form for <strong>{selectedType}</strong> coming soon.
                </p>
              </div>
            </div>
          )}
        </RegisterTabs>
      </div>
    </main>
  )
}
