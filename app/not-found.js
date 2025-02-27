import Link from 'next/link';

import styles from '@/styles/404.module.css';

export const metadata = {
  title: 'GalleraIMG | 404 Not Found',
  description: 'Not Found page, error 404',
};

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <p className={styles.contentContainer__text}>Ooops, page not found !</p>
        <div className={styles.contentContainer__imageWrapper}>
          <img src='/404_error.png' alt='404 page' />
        </div>
        <p className={styles.contentContainer__errorText}>ErroR</p>
        <Link
          href='/'
          className={`${styles.filledBtnPr_300} ${styles.contentContainer__homeLink}`}
        >
          Go HOME
        </Link>
      </div>
    </main>
  );
}
