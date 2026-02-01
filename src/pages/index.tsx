import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import StructuredData from '@site/src/components/StructuredData';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>        
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://villanite.com/#person",
      "name": "Aries Villanite",
      "jobTitle": "Emperor of Avinadal",
      "description": "Sovereign ruler of the Empire of Avinadal, a science-fantasy realm spanning countless worlds. This is a fictional character in a creative lore-driven universe.",
      "url": "https://villanite.com",
      "image": "https://villanite.com/img/ariel.jpg",
      "sameAs": [
        "https://bsky.app/profile/villanite.me",
        "https://twitter.com/villanite",
        "https://github.com/villanite",
        "https://instagram.com/villanite",
        "https://twitch.tv/villanite",
        "https://youtube.com/@villanite",
        "https://vrchat.com/home/user/usr_8be08360-5a88-4dcb-873d-72f44f9e0637",
        "https://www.f-list.net/c/villanite",
        "https://discord.gg/avinadal"
      ],
      "knowsAbout": [
        "Imperial Governance",
        "Interdimensional Politics",
        "Military Strategy",
        "Technological Innovation",
        "Magical Theory",
        "Diplomatic Relations",
        "Science Fiction",
        "Fantasy Worldbuilding"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://villanite.com/#website",
      "url": "https://villanite.com",
      "name": "Aries Villanite - Imperial Digital Presence",
      "description": "Official digital presence of Emperor Aries Villanite and the Empire of Avinadal",
      "publisher": {
        "@id": "https://villanite.com/#person"
      },
      "inLanguage": "en-US"
    }
  ];

  return (
    <Layout description="Official digital presence of Emperor Aries Villanite and the Empire of Avinadal">
      <Head>
        <title>Aries Villanite - Emperor of Avinadal</title>
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
