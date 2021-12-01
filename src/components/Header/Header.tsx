import {FC} from 'react';
import {HEADER_TEXT} from '../../constants/constants';

import styles from './Header.module.css';

export const Header: FC = () => {
  return <header className={styles.header}>{HEADER_TEXT}</header>;
};
