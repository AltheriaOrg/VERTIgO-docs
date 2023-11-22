import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner) + " hero--mode"}>
      <div className="container">
          <img src="/img/VERTIgO-logo-long.png" alt="Logo" />
        <h1 >Documentation</h1>
        <p className="hero__subtitle">Get started using the <b>European Exercises Simulation Platform (EESP)</b></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/general/Online-Installation">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={``}
      description="">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
