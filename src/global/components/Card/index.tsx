import Image from 'next/image';

import { renderThumbnailToCharacter } from './utils';

import { Props } from './types';
import styles from './styles.module.scss';

export function Card(props: Props) {
  return (
    <figure className={styles.wrapper}>
      <div>
        <Image
          src={renderThumbnailToCharacter(
            props.character.image,
            props.character.house
          )}
          alt={props.character.name}
          layout="fill"
        />
      </div>

      <figcaption>
        {props.character.name ?? 'Desconhecido'}
      </figcaption>
    </figure>
  );
}
