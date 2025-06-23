import { getTranslation } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact - eDarris',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Contact({ params }: any) {
  const { t } = await getTranslation(params.locale);
  return (
    <>
      <Header locale={params.locale} />
      <main className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-4">{t('contactUs')}</h1>
        <form name="contact" method="POST" data-netlify="true" className="grid gap-4" action="/thank-you">
          <input type="hidden" name="form-name" value="contact" />
          <label className="flex flex-col">
            {t('name')}
            <input type="text" name="name" className="border p-2" required />
          </label>
        <label className="flex flex-col">
          {t('email')}
          <input type="email" name="email" className="border p-2" required />
        </label>
        <label className="flex flex-col">
          {t('message')}
          <textarea name="message" className="border p-2" rows={4} required />
        </label>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-max">
            {t('submit')}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
