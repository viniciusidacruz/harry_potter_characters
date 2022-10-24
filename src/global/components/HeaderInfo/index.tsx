import Image from 'next/image';

import { ALTERNATIVES } from '../../constants';
import ShieldSrc from '../../assets/shield.png';

import { Props } from './types';
import styles from './styles.module.scss';

export function HeaderInfo(props: Props) {
  return (
    <div className={styles.wrapper}>
      <Image src={ShieldSrc} alt={ALTERNATIVES.shield} />
      <h2>{props.title}</h2>
      <span />
    </div>
  );
}
