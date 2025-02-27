import Link from 'next/link';
import styles from '@/styles/footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <hr className={styles.divider} />
        <div className={styles.content}>
          <div className={styles.links}>
            <Link href='/' className={styles.logoLink}>
              <span className={styles.logoText}>GalleraIMG</span>
            </Link>
            <span className={styles.separator}>|</span>
            <Link href='/favorites' className={styles.link}>
              Favorites
            </Link>
          </div>
          <small className={styles.copyright}>
            © {currentYear} Developed by{' '}
            <span className={styles.developer}>
              <Link
                href='https://www.linkedin.com/in/anatolii-tserkunyk/'
                className={`${styles.link} ${styles.devLink}`}
              >
                Mmarvinn
              </Link>
            </span>
          </small>
        </div>
      </div>
    </footer>
  );
};
