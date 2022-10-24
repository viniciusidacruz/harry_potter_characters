import Link from 'next/link';
import Image from 'next/image';

import { ALTERNATIVES } from '../../constants';
import LogoSrc from '../../assets/logo_dark.png';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <a>
          <Image src={LogoSrc} alt={ALTERNATIVES.logoSimple} />
        </a>
      </Link>
    </header>
  );
}
