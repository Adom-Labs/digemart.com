import { seo } from '@/helpers/text_display';
import ThemeProvider from '@/providers/ThemeProvider';
import '@/styles/globals.css';
import type { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const Layout = () => <div>{getLayout(<Component {...pageProps} />)}</div>;
  return (
    <>
      <DefaultSeo
        title={seo.default.title}
        description={seo.default.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: seo.default.url,
          siteName: seo.default.sitename,
        }}
        twitter={{
          handle: seo.default.twitter,
          site: seo.default.url,
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider>
        <Toaster position='bottom-right' />
        <Layout />
      </ThemeProvider>
    </>
  );
}
