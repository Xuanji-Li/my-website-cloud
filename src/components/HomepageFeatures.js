import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Full stack developer ',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Knowledgeable Front End Developer adept at creating successful websites that meet customer needs. Specializing in collaborating with customers to gather requirements, produce plans and improve designs for usability and functionality
      </>
    ),
  },
  {
    title: ' Powered by Interests',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       I love building cool, fun, meaningful or even meaningless things with tech, whether that be websites, applications or games.
      </>
    ),
  },
  {
    title: 'UOA',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Recently graduated from University of Adelaide, Accomplished product manager Intern during master degree program with hands-on experience.
        Detail-oriented with success supporting team and inventory management.
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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
