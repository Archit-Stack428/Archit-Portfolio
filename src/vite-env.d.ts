/// <reference types="vite/client" />

declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any[];
    lines: any[];
    words: any[];
    revert(): void;
  }
}
