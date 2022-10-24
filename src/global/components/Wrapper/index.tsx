import Head from 'next/head';
import { Fragment, useState } from 'react';

import { Card } from '../Card';
import { Modal } from '../Modal';
import { Header } from '../Header';
import { CardInfo } from '../CardInfo';
import { HeaderInfo } from '../HeaderInfo';
import { Pagination } from '../Pagination';

import { Props } from './types';
import styles from './styles.module.scss';
import { CharacterProps } from '../../@types/character';

export function Wrapper(props: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const [showModalCharacter, setShowModalCharacter] = useState(false);
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterProps | null>(null);

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

  const handleCloseModal = () => {
    setShowModalCharacter(false);
    setSelectedCharacter(null);
  };

  const handleSelectCharacter = (character: CharacterProps) => {
    setShowModalCharacter(true);
    setSelectedCharacter(character);
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
              <Card
                key={character.name}
                character={character}
                onClick={() => handleSelectCharacter(character)}
              />
            ))}
          </section>

          <Pagination
            pages={pages}
            currentPage={currentPage}
            handleChangePage={handleChangePage}
          />
        </main>
      </div>
      <Modal isOpen={showModalCharacter} onClose={handleCloseModal}>
        <CardInfo
          character={selectedCharacter}
          onClose={handleCloseModal}
        />
      </Modal>
    </Fragment>
  );
}
