'use client';

import { usePathname, useRouter } from 'next/navigation';

export const useChangeLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    const segments = pathname.split('/').filter(Boolean);
    const currentLocale = ['en', 'ru'].includes(segments[0]) ? segments[0] : null;

    if (currentLocale) {
      segments[0] = lng;
    } else {
      segments.unshift(lng);
    }

    const newPath = '/' + segments.join('/');
    document.cookie = `NEXT_LOCALE=${lng}; path=/; max-age=31536000`;

    router.replace(newPath);
    router.refresh();
  };

  return changeLanguage;
};
