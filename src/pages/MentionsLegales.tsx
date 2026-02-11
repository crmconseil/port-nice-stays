import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const MentionsLegales = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{`${t('legal.title')} — Nice Port Duplex`}</title>
        <meta name="description" content={t('legal.title')} />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container-narrow px-4">
          <h1 className="font-serif text-3xl md:text-4xl mb-8">{t('legal.title')}</h1>
          
          <div className="prose prose-sm md:prose-base max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-foreground font-serif text-xl md:text-2xl">{t('legal.editor_title')}</h2>
              <p>{t('legal.editor_content')}</p>
            </section>

            <section>
              <h2 className="text-foreground font-serif text-xl md:text-2xl">{t('legal.hosting_title')}</h2>
              <p>{t('legal.hosting_content')}</p>
            </section>

            <section>
              <h2 className="text-foreground font-serif text-xl md:text-2xl">{t('legal.ip_title')}</h2>
              <p>{t('legal.ip_content')}</p>
            </section>

            <section>
              <h2 className="text-foreground font-serif text-xl md:text-2xl">{t('legal.data_title')}</h2>
              <p>{t('legal.data_content')}</p>
            </section>

            <section>
              <h2 className="text-foreground font-serif text-xl md:text-2xl">{t('legal.cookies_title')}</h2>
              <p>{t('legal.cookies_content')}</p>
            </section>

            <section>
              <h2 className="text-foreground font-serif text-xl md:text-2xl">{t('legal.liability_title')}</h2>
              <p>{t('legal.liability_content')}</p>
            </section>

            <section>
              <h2 className="text-foreground font-serif text-xl md:text-2xl">{t('legal.law_title')}</h2>
              <p>{t('legal.law_content')}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegales;
