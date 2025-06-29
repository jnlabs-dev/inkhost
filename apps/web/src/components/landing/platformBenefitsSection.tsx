"use client";

import {
  CalendarCheck,
  MapPin,
  Star,
  CreditCard,
  LayoutDashboard,
  Bell,
} from "lucide-react";

const benefits = [
  {
    icon: CalendarCheck,
    title: "Booking System",
    description: "Clients can book tattoo sessions directly with artists via the platform.",
  },
  {
    icon: MapPin,
    title: "Location Awareness",
    description: "Studios and artists appear based on city and proximity.",
  },
  {
    icon: Star,
    title: "Portfolios & Reviews",
    description: "Artists can showcase work, get rated, and build a reputation.",
  },
  {
    icon: CreditCard,
    title: "Payments via Stripe",
    description: "Secure, seamless, and instant payments powered by Stripe.",
  },
  {
    icon: LayoutDashboard,
    title: "Intuitive Dashboards",
    description: "Studios and artists get tools to manage bookings, schedules, and visibility.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Stay updated on booking requests, messages, and activity.",
  },
];

export function PlatformBenefitsSection() {
  return (
    <section className="py-8 flex items-center justify-center">
      <div className="container max-w-5xl px-12 md:px-8">
        <h3 className="text-xl md:text-2xl text-center font-thin text-muted-foreground tracking-wide mb-8">
          Platform Benefits
        </h3>
        <div className="grid gap-12 md:grid-cols-2">
          {benefits.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <item.icon className="size-6 text-gray-900 shrink-0 mt-[2px]" />
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
