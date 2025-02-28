'use client';

import { useEffect, useState } from 'react';
import { Input } from 'antd';

import styles from '@/styles/searchBar.module.css';

const { Search } = Input;

export const SearchBar = ({ onSearch }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.searchContainer}>
      {isLoading ? (
        <div className={styles.searchLoadingPlaceholder} />
      ) : (
        <Search
          placeholder='Search for images...'
          allowClear
          enterButton
          size='large'
          onSearch={onSearch}
          className={styles.searchInput}
        />
      )}
    </div>
  );
};
