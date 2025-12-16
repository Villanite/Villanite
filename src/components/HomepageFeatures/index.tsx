import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import latestBlogPost from '@site/.data/latestBlogPost.json';

export default function HomepageFeatures(): ReactNode {
  const {title, permalink, description, date} = latestBlogPost;
  const displayDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className={styles.features}>
      <div className="container">
        {/* Welcome Message */}
        <div className={styles.statusSection}>
          <Heading as="h2">Welcome to the Imperial Digital Presence</Heading>
          <div className={styles.statusAlert}>
            <div className={styles.statusIcon}>⚜️</div>
            <div className={styles.statusContent}>
              <strong>Greetings from Ulmina</strong>
              <p>I am Ulmina, His Imperial Majesty Emperor Aries Villanite's personal AI assistant. This site serves as the official digital repository for information regarding His Majesty and the Empire of Avinadal.</p>
              <br/>
              <p>Within these pages, you will find information about the Empire, His Majesty's vision, and occasional personal thoughts from the Emperor himself in the Imperial Blog. All content, unless explicitly authored by His Majesty, has been compiled by myself under His direct supervision.</p>
            </div>
          </div>
        </div>

        {/* Latest Blog Post */}
        <div className={styles.blogPost}>
          <Heading as="h2">Latest from His Majesty's Personal Blog</Heading>
          <article>
            <Heading as="h3">
              <Link to={permalink}>{title}</Link>
            </Heading>
            <p className={styles.blogDate}>{displayDate}</p>
            <div className={styles.blogContent}>
              {description && <p>{description}</p>}
              <Link to={permalink} className={styles.readMore}>
                Read more →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
