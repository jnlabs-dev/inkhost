"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("./InteractiveMap").then(mod => mod.InteractiveMap), {
  ssr: false,
});

export { InteractiveMap };
