import React, { useState } from 'react';
import styles from './history.module.scss';
import { Information } from '../information/information';
import { useGlobalContext } from '../../context';
import { ModalAbout } from '../modalAbout/modalAbout';
import { ModalHelper } from '../modalHelper/modalHelper';
import DataService from '../../services/DataService';
import { IHistory } from './historyProps';

export const History: React.FC<IHistory> = ({ setForceUpdate }) => {
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

  const onOpenAllElements = () => {
    DataService.openAllElements();
    setForceUpdate((state) => !state);
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
        <button onClick={onOpenAllElements}>Обзор</button>
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
