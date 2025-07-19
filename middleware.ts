import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware({
  ...routing,
  localePrefix: 'always',
  localeDetection: true,
});

export const config = {
  matcher: [
    // Apply middleware to all routes except those listed
    '/((?!api/|trpc/|_next/|_vercel/|ws/.*|.*\\..*).*)',
  ],
};
