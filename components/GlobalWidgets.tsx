'use client';
import { useEffect } from 'react';
import { koriva } from '@/lib/site-data';
export function GlobalWidgets() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ((window as any)._cgInject) { (window as any)._cgInject(koriva.gymSlug, false); return; }
    const script = document.createElement('script');
    script.src = `${koriva.baseUrl}/widgets/loader.js`;
    script.setAttribute('data-gym', koriva.gymSlug);
    script.setAttribute('data-key', koriva.widgetKey);
    script.async = true;
    document.head.appendChild(script);
  }, []);
  return null;
}
