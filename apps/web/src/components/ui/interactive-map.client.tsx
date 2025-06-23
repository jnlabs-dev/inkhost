"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("./interactive-map").then(mod => mod.InteractiveMap), {
  ssr: false,
});

export { InteractiveMap };
