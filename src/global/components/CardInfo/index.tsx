import Image from 'next/image';
import { RiCloseCircleFill } from 'react-icons/ri';

import { renderThumbnailToCharacter } from '../../utils/renderThumbnailHouses';

import { Props } from './types';
import styles from './styles.module.scss';

export function CardInfo(props: Props) {
  return (
    <div className={styles.wrapper}>
      <div>
        <Image
          src={renderThumbnailToCharacter(
            String(props.character?.image),
            String(props.character?.house)
          )}
          alt={props.character?.name}
          layout="fill"
        />
      </div>
      <div className={styles.groupInfo}>
        <RiCloseCircleFill
          onClick={() => props.onClose()}
          className={styles.icon}
        />
        <div className={styles.lineInfo}>
          <span>Nome:</span>{' '}
          <span>{props.character?.name ?? 'Desconhecido'}</span>
        </div>
        <div className={styles.lineInfo}>
          <span>Casa:</span>{' '}
          <span>{props.character?.house ?? 'Desconhecido'}</span>
        </div>
        <div className={styles.lineInfo}>
          <span>Espécie:</span>{' '}
          <span>{props.character?.species ?? 'Desconhecido'}</span>
        </div>
        <div className={styles.lineInfo}>
          <span>Data de Nasc:</span>{' '}
          <span>
            {props.character?.dateOfBirth ?? 'Desconhecido'}
          </span>
        </div>
        <div className={styles.lineInfo}>
          <span>Gênero:</span>{' '}
          <span>{props.character?.gender ?? 'Desconhecido'}</span>
        </div>
        <div className={styles.lineInfo}>
          <span>Patronus:</span>{' '}
          <span>{props.character?.patronus ?? 'Desconhecido'}</span>
        </div>
        <div className={styles.groupLine}>
          <span>Varinha:</span>
          <div className={styles.lineInfo}>
            <span>- Madeira:</span>{' '}
            <span>
              {props.character?.wand.wood ?? 'Desconhecido'}
            </span>
          </div>
          <div className={styles.lineInfo}>
            <span>- Núcleo:</span>{' '}
            <span>
              {props.character?.wand.core ?? 'Desconhecido'}
            </span>
          </div>
          <div className={styles.lineInfo}>
            <span>- Comprimento:</span>{' '}
            <span>
              {props.character?.wand.length ?? 'Desconhecido'}
            </span>
          </div>
        </div>
        <div className={styles.lineInfo}>
          <span>Ancestralidade:</span>{' '}
          <span>{props.character?.ancestry ?? 'Desconhecido'}</span>
        </div>
        <div className={styles.lineInfo}>
          <span>Ator:</span>{' '}
          <span>{props.character?.actor ?? 'Desconhecido'}</span>
        </div>
      </div>
    </div>
  );
}
