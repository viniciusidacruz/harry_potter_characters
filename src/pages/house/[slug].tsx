import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { BASES } from '../../global/constants';
import { ServiceCharacters } from '../../global/services/CharactersService';

import { Loading, Wrapper } from '../../global/components';

import * as Types from '../../global/@types/character';

export default function CharactersForHouse() {
  const [characters, setCharacters] = useState<
    Types.CharacterProps[]
  >([]);

  const { query } = useRouter();

  const fetchAllCharacters = useCallback(async () => {
    const response: Types.CharacterProps[] =
      await ServiceCharacters.getAllCharacters();

    if (response.length > 0) {
      const charactersForHouse = response.filter(
        (character) => character.house === query.slug
      );

      setCharacters(charactersForHouse);
    }
  }, [query.slug]);

  useEffect(() => {
    fetchAllCharacters();
  }, [fetchAllCharacters]);

  const renderTitleForTab = () => {
    const houses: Types.HouseProps = query.slug as Types.HouseProps;

    switch (houses) {
      case 'Gryffindor':
        return 'Grifinória';
      case 'Hufflepuff':
        return 'Lufa-Lufa';
      case 'Ravenclaw':
        return 'Corvinal';
      case 'Slytherin':
        return 'Sonserina';

      default:
        'Desconhecido';
    }
  };

  if (characters.length === 0) {
    return <Loading />;
  }

  return (
    <Wrapper
      contentArray={characters}
      titlePage={`Personagens da casa ${renderTitleForTab()}`}
      titleTab={`Casa: ${renderTitleForTab()} ${BASES.title}`}
    />
  );
}
