import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function getLenis() {
  return lenisInstance;
}

/** Smoothly scroll to a section by id ("about" or "#about"). */
export function scrollToId(hash: string) {
  const target = hash.startsWith("#") ? hash : `#${hash}`;
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -84, duration: 1.4 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
