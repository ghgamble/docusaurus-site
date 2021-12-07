import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'PHC Users/Admins',
    img: '/img/phc.svg',
    url: 'https://docs.us.lifeomic.com/'
  },
  {
    title: 'PHC API',
    img: '/img/phc-code.svg',
    url: 'https://docs.us.lifeomic.com/development/#openapi-documentation'
  },
  {
    title: 'Security',
    img: '/img/security-logo.svg',
    url: 'https://security.lifeomic.com/'
  },
  {
    title: 'Skillspring Users/Admin',
    img: '/img/skillspring-logo.svg',
    url: 'https://skillspring.com/resources/'
  },
  {
    title: 'Skillspring Developers',
    img: '/img/skillspring-code.svg',
    url: 'https://docs.us.skillspring.com/'
  },
  {
    title: 'Chroma Design System',
    img: '/img/chroma.svg',
    url: 'https://lifeomic.github.io/chroma-react/?path=/story/form-components--react-hook-form'
  },
  {
    title: 'Chromicons Icon Set',
    img: '/img/chromicons.svg',
    url: 'https://lifeomic.github.io/chromicons.com/'
  },
];

function Feature({img, title, url}) {
  return (
    <a href={url} className={clsx('col col--3 document-site-section')} target="_blank" rel="noreferrer nofollower">
      <div>
        <div className="text--center img-section">
          <img className={styles.img} alt={title} src={img} />
        </div>
        <div className="text--center padding-horiz--md text-section">
          <h3 className={clsx(styles.itemTitle)}>{title}</h3>
        </div>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
