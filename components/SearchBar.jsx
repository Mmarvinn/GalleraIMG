'use client';

import { Input } from 'antd';
import styles from '@/styles/searchBar.module.css';

const { Search } = Input;

export const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <Search
        placeholder='Search for images...'
        allowClear
        enterButton
        size='large'
        onSearch={onSearch}
        className={styles.searchInput}
      />
    </div>
  );
};
