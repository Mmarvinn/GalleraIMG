'use client';

import styles from '@/styles/errors.module.css';

export const ShowErrorContainer = ({ error }) => {
  return (
    <div className={styles.errorContainer}>
      <h2>Oops! Something went wrong</h2>
      <p>{error}</p>
    </div>
  );
};
