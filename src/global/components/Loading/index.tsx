import Image from 'next/image';

import { ALTERNATIVES } from '../../constants';
import LoaderSrc from '../../assets/loader.gif';

import styles from './styles.module.scss';

export function Loading() {
  return (
    <main className={styles.wrapper}>
      <Image src={LoaderSrc} alt={ALTERNATIVES.loader} />
    </main>
  );
}
