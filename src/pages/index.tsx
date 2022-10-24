import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import LogoSrc from '../global/assets/logo.png';
import { HOME_HOUSES } from '../global/mocks/home';
import { BASES, ALTERNATIVES } from '../global/constants';

import { HeaderInfo } from '../global/components';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const { push } = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Página Inicial {BASES.title}</title>
      </Head>

      <main className={styles.wrapper}>
        <div className={styles.line} />
        <section className={styles.introduction}>
          <div>
            <Image src={LogoSrc} alt={ALTERNATIVES.logo} />
            <button
              type="button"
              className="buttonDefault"
              onClick={() => push('/all')}
            >
              VEJA TODOS OS PERSONAGENS
            </button>
          </div>
        </section>

        <section className={styles.sectionHouses}>
          <HeaderInfo title="Navegue pelas Casas" />

          <div className={styles.contentCardsHouses}>
            {HOME_HOUSES.map((house) => (
              <Link href={house.path} key={house.id} passHref>
                <a>
                  <Image
                    src={house.src}
                    alt={house.alternativeText}
                  />
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
