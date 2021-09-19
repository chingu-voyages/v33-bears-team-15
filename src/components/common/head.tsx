import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
      <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#02cc97" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content="#081122" />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="theme-color" content="#02cc97" />
    </NextHead>
  );
}
