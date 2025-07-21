'use client';

import { ReactNode } from 'react';

/* ? Component and Provider Imports */
import { ThemeProvider } from './providers/ThemeProvider';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

/* ? Analytics */
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ModalProvider } from './providers/MacModalProvider';
import MacDownloadModalWrapper from './providers/MacDownloadModalWrapper';

export default function LocaeLayoutInner({ children }: { children: ReactNode }) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ThemeProvider>
        <Topbar />
        <ModalProvider>
          <main>
            <MacDownloadModalWrapper />
            {children}
          </main>
        </ModalProvider>
        <Footer />
      </ThemeProvider>
    </>
  );
}
