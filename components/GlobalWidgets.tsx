'use client';
import { useEffect } from 'react';
import { garrison365 } from '@/lib/site-data';
export function GlobalWidgets() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ((window as any)._cgInject) { (window as any)._cgInject(garrison365.gymSlug, false); return; }
    const script = document.createElement('script');
    script.src = `${garrison365.baseUrl}/widgets/loader.js`;
    script.setAttribute('data-gym', garrison365.gymSlug);
    script.setAttribute('data-key', garrison365.widgetKey);
    script.async = true;
    document.head.appendChild(script);
  }, []);
  return null;
}
