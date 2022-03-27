import React, { useState } from 'react';
import { LayoutPage, Game } from '../../components';
import { History } from '../../components/history/history';

export const MainPage: React.FC = () => {
  const [eraId, setEraId] = useState<number>(0);
  return (
    <LayoutPage eraId={eraId}>
      <History />
      <Game eraId={eraId} setEraId={setEraId} />
    </LayoutPage>
  );
};
