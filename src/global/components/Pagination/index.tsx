import { Props } from './types';
import styles from './styles.module.scss';

export function Pagination(props: Props) {
  return (
    <div className={styles.wrapper}>
      {Array.from(Array(props.pages), (_, index) => (
        <button
          style={
            index === props.currentPage
              ? { backgroundColor: '#A6955A' }
              : { backgroundColor: '#000', color: '#fff' }
          }
          value={index}
          onClick={(event: any) =>
            props.handleChangePage(Number(event.target.value))
          }
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
