import { NextSeo } from 'next-seo';
import config from '~data/config';

export interface ISEO {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: ISEO) {
  const siteTitle = title || config.title;
  const siteDescription = description || config.descritpion;

  return (
    <NextSeo
      title={siteTitle}
      titleTemplate={config.titleTemplate}
      description={siteDescription}
      canonical={config.siteUrl}
      openGraph={{
        type: 'website',
        locale: config.siteLocale,
        title: siteTitle,
        description: siteDescription,
        site_name: config.siteName,
      }}
    />
  );
}
