import React, { useState } from 'react';
import styles from './history.module.scss';
import { Information } from '../information/information';
import { useGlobalContext } from '../../context';
import { ModalAbout } from '../modalAbout/modalAbout';

export const History: React.FC = () => {
  const { history } = useGlobalContext();
  const { title, years, description } = history;
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const onActiveModalAbout = () => {
    setActiveModal(true);
  };

  return (
    <div className={styles.history}>
      <div className={styles.titleComponent}>
        <span>АЛХИМИЯ ФИЛОСОФИИ</span>
      </div>
      <Information title={title} years={years} description={description} />
      <div className={styles.actions}>
        <button onClick={onActiveModalAbout}>О проекте</button>
      </div>
      {activeModal && <ModalAbout activeModal={activeModal} setActiveModal={setActiveModal} />}
    </div>
  );
};
