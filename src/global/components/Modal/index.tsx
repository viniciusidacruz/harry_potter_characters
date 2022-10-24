import { Fragment, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import { Props } from './types';
import styles from './styles.module.scss';

export function Modal(props: Props) {
  const modalRef = useRef(null);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: props.isOpen ? 1 : 0,
    transform: props.isOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (event: any) => {
    if (modalRef.current === event.target) {
      props.onClose();
    }
  };

  return (
    <Fragment>
      {props.isOpen && (
        <div
          className={styles.wrapper}
          ref={modalRef}
          onClick={closeModal}
        >
          <animated.div style={animation}>
            {props.children}
          </animated.div>
        </div>
      )}
    </Fragment>
  );
}
