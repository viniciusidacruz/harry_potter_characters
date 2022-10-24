import { GetStaticProps } from 'next';

import { BASES } from '../../global/constants';

import { Loading, Wrapper } from '../../global/components';

import { Props } from './types';

export default function Todos(props: Props) {
  if (!props.characters) {
    return <Loading />;
  }

  return (
    <Wrapper
      titlePage="Personagens"
      contentArray={props.characters}
      titleTab={`Todos os personagens ${BASES.title}`}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://hp-api.herokuapp.com/api/characters'
  );
  const dataCharacter = await response.json();

  return {
    props: {
      characters: dataCharacter,
    },
  };
};
