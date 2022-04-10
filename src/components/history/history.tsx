import React, { useState } from 'react';
import styles from './history.module.scss';
import { Information } from '../information/information';
import { useGlobalContext } from '../../context';
import { ModalAbout } from '../modalAbout/modalAbout';
import { ModalHelper } from '../modalHelper/modalHelper';

export const History: React.FC = () => {
  const { history } = useGlobalContext();
  const { title, years, description } = history;
  const [activeAboutModal, setActiveAboutModal] = useState<boolean>(false);
  const [activeHelperModal, setActiveHelperModal] = useState<boolean>(false);

  const onActiveAboutModal = () => {
    setActiveAboutModal(true);
  };

  const onActiveHelperModal = () => {
    setActiveHelperModal(true);
  };

  return (
    <div className={styles.history}>
      <div className={styles.titleComponent}>
        <span>АЛХИМИЯ ФИЛОСОФИИ</span>
      </div>
      <Information title={title} years={years} description={description} />
      <div className={styles.actions}>
        <button onClick={onActiveAboutModal}>О проекте</button>
        <button onClick={onActiveHelperModal}>Как играть</button>
      </div>
      {activeAboutModal && (
        <ModalAbout activeModal={activeAboutModal} setActiveModal={setActiveAboutModal} />
      )}
      {activeHelperModal && (
        <ModalHelper activeModal={activeHelperModal} setActiveModal={setActiveHelperModal} />
      )}
    </div>
  );
};
