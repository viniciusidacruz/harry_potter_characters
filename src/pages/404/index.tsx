import Image from 'next/image';
import { useRouter } from 'next/router';

import LogoSrc from '../../global/assets/logo.png';
import { ALTERNATIVES } from '../../global/constants/alternatives';

import styles from './styles.module.scss';

export default function NotFound() {
  const { push } = useRouter();

  return (
    <main className={styles.wrapper}>
      <section className={styles.content}>
        <Image src={LogoSrc} alt={ALTERNATIVES.logo} />
        <h1>Ops, essa página não existe</h1>
        <button
          type="button"
          className="buttonDefault"
          onClick={() => push('/')}
        >
          Voltar para página principal
        </button>
      </section>
    </main>
  );
}
