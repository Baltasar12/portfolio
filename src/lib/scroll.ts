import * as React from "react";

export function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (!href?.startsWith('#')) return;

  e.preventDefault();
  const id = href.replace('#', '');
  const element = document.getElementById(id);

  if (element) {
    // Keep browser history
    window.history.pushState(null, "", href);

    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Use the native scrollIntoView behavior which respects CSS scroll-margin-top / scroll-padding-top
    element.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  }
}
