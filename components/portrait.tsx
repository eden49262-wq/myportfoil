"use client";

import Image from "next/image";
import { useState } from "react";

export function Portrait() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <div className="portrait-frame">
      <div className="portrait-fallback" aria-hidden="true">EA</div>
      {imageAvailable && (
        <Image
          src="/profile.jpg"
          alt="Portrait of Eden Abebaw"
          fill
          priority
          sizes="(max-width: 760px) 84vw, 390px"
          onError={() => setImageAvailable(false)}
        />
      )}
      <div className="portrait-caption">
        <div>
          <strong>Eden Abebaw</strong>
          <span className="caption-subtitle">Software Engineer</span>
        </div>
        <span className="portrait-status"><span /> Open to work</span>
      </div>
    </div>
  );
}
