import Header from '@/components/Header';
import Footer from '@/components/Footer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ThankYou({ params }: any) {
  return (
    <>
      <Header locale={params.locale} />
      <main className="container mx-auto p-4 flex-grow">
        <h1>Thank you!</h1>
        <p>We received your inquiry.</p>
      </main>
      <Footer />
    </>
  );
}
