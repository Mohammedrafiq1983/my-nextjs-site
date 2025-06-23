import Link from 'next/link';
import LanguageToggle from './LanguageToggle';

export default function Header({ locale }: { locale: string }) {
  return (
    <header className="bg-gray-100 p-4 flex items-center gap-4">
      <Link href={`/${locale}`} className="font-bold">eDarris</Link>
      <nav className="flex gap-4">
        <Link href={`/${locale}/about`}>About</Link>
        <Link href={`/${locale}/contact`}>Contact</Link>
      </nav>
      <LanguageToggle locale={locale} />
    </header>
  );
}
