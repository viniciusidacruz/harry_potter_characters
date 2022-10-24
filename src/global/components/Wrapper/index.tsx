import Head from 'next/head';
import { Fragment, useState } from 'react';

import { Card } from '../Card';
import { Header } from '../Header';
import { HeaderInfo } from '../HeaderInfo';
import { Pagination } from '../Pagination';

import { Props } from './types';
import styles from './styles.module.scss';

export function Wrapper(props: Props) {
  const [currentPage, setCurrentPage] = useState(0);

  const LIMIT_CHARACTERS = 20;
  const pages = Math.ceil(
    props.contentArray.length / LIMIT_CHARACTERS
  );
  const startPage = currentPage * LIMIT_CHARACTERS;
  const endPage = startPage + LIMIT_CHARACTERS;
  const currentCharacter = props.contentArray.slice(
    startPage,
    endPage
  );

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Fragment>
      <Head>
        <title>{props.titleTab}</title>
      </Head>

      <div className={styles.wrapper}>
        <Header />
        <main className={styles.content}>
          <HeaderInfo title={props.titlePage} />
          <section>
            {currentCharacter.map((character) => (
              <Card key={character.name} character={character} />
            ))}
          </section>

          <Pagination
            pages={pages}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
          />
        </main>
      </div>
    </Fragment>
  );
}
