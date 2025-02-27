// import styles from '@/styles/header.module.css';

// export const Header = () => {
//   return (
//     <header>
//       <p>this is the header</p>
//     </header>
//   );
// };

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link href='/' className={styles.logoLink}>
            <Image
              src='/logo.svg'
              alt='GalleraIMG Logo'
              width={48}
              height={48}
              priority
            />
            <span className={styles.logoText}>GalleraIMG</span>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <Link href='/favorites' className={styles.navLink}>
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};
