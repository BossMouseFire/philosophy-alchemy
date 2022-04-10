import React, { useEffect, useState } from 'react';
import { LayoutPage, Game } from '../../components';
import { History } from '../../components/history/history';
import { ModalHelper } from '../../components/modalHelper/modalHelper';

export const MainPage: React.FC = () => {
  const [eraId, setEraId] = useState<number>(0);
  const [activeModal, setActiveModal] = useState<boolean>(false);

  useEffect(() => {
    const state = localStorage.getItem('firstRun');
    if (!state) {
      localStorage.setItem('firstRun', '1');
      setActiveModal(true);
    }
  }, []);
  return (
    <LayoutPage eraId={eraId}>
      <History />
      <Game eraId={eraId} setEraId={setEraId} />
      {activeModal && <ModalHelper activeModal={activeModal} setActiveModal={setActiveModal} />}
    </LayoutPage>
  );
};
