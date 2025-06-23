import { getTranslation } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function About({ params }: any) {
  const { t } = await getTranslation(params.locale);
  return (
    <>
      <Header locale={params.locale} />
      <main className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4">{t('about')}</h1>
        <p>{t('aboutDescription')}</p>
      </main>
      <Footer />
    </>
  );
}
