import Image from 'next/image';
import Link from 'next/link';
import { getTranslation } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({ params }: any) {
  const { t } = await getTranslation(params.locale);
  const sections = [
    { key: 'officeStationery', image: 'https://source.unsplash.com/600x400/?stationery' },
    { key: 'educationSupplies', image: 'https://source.unsplash.com/600x400/?education' },
    { key: 'printShop', image: 'https://source.unsplash.com/600x400/?printing' },
    { key: 'packaging', image: 'https://source.unsplash.com/600x400/?packaging' },
  ];

  return (
    <>
      <Header locale={params.locale} />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map(({ key, image }) => (
            <div key={key} className="border rounded-lg overflow-hidden shadow">
              <Image src={image} alt={t(key)} width={600} height={400} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{t(key)}</h2>
              <Link href={`/${params.locale}/contact`} className="text-blue-600 underline mt-auto">
                {t('requestQuote')}
              </Link>
            </div>
          </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
