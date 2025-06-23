'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { languages } from '@/i18n/settings';

export default function LanguageToggle({ locale }: { locale: string }) {
  const pathname = usePathname();
  const segments = pathname.split('/');
  segments[1] = locale === 'en' ? 'ar' : 'en';
  const otherLocalePath = segments.join('/');

  return (
    <Link href={otherLocalePath} className="ml-auto underline">
      {locale === 'en' ? 'العربية' : 'English'}
    </Link>
  );
}
