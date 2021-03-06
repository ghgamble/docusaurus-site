import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__subtitle', styles.heroBannerHeading)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroBannerSub)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className={clsx(styles.homePageFeatured)}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
