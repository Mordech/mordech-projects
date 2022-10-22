declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  import React from 'react';
  const src: React.FC<React.SVGProps<SVGSVGElement>>;
  export default src;
}

declare module '*.pdf';
declare module '*.webm';
declare module '*.mp4';
declare module '*.lottie.json';
