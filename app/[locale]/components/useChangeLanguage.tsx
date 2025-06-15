'use client';

import { useRouter, usePathname } from 'next/navigation';
import { setCookie } from 'nookies';

export const useChangeLanguage = () => {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (lng: string) => {
        const segments = pathname.split('/').filter(Boolean);

        if (['en', 'ru'].includes(segments[0])) {
            segments[0] = lng;
        } else {
            segments.unshift(lng);
        }

        const newPath = '/' + segments.join('/');
        setCookie(null, 'NEXT_LOCALE', lng, { path: '/' });

        router.replace(newPath);
    };

    return changeLanguage;
};
