'use client';

import { ReactNode } from 'react';

/* ? Component and Provider Imports */
import { ThemeProvider } from './providers/ThemeProvider';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

/* ? Analytics */
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function LocaleLayoutInner({ children }: { children: ReactNode }) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ThemeProvider>
        <Topbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
