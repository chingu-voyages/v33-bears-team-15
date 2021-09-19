import { NextSeo } from 'next-seo';
import config from '~data/config';

export interface ISEO {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: ISEO) {
  title = title || config.title;
  description = description || config.descritpion;

  return (
    <NextSeo
      title={title}
      titleTemplate={config.titleTemplate}
      description={description}
      canonical={config.siteUrl}
      openGraph={{
        type: 'website',
        locale: config.siteLocale,
        title,
        description,
        site_name: config.siteName,
      }}
    />
  );
}
