import { useEffect, useState, FC } from 'react';
import { useQuery } from 'react-query';

import { iGame } from '../../Interfaces/iGame';

import LoadingAnimation from './../Presentational/LoadingAnimation';
import ErrorMessage from '../Presentational/ErrorMessage';
import GameCard from '../Presentational/GameCard';
import GameDialog from '../Presentational/GameDialog';

export const GameBaseQuery: FC = () => {
  const [gameList, setGameList] = useState<iGame[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [steamID, setSteamID] = useState<string | null>(null);

  const { isLoading, error, data, status } = useQuery('GameBaseData', () =>
    fetch('https://usesql.com/query/gUC7x2/GoogleSheet?refresh=true').then((res) =>
      res.json()
    )
  );

  useEffect(() => {
    if (status === 'success') {
      setGameList(data);
    }
  }, [status, data]);

  if (isLoading) return <LoadingAnimation />;
  if (error) return <ErrorMessage />;

  const handleDetailClick = (SelectedGameID: string) => {
    setSteamID(SelectedGameID);
    setModalOpen(true);
  };

  return (
    <div>
      <GameDialog
        modalOpen={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
        steamID={steamID!}
      />
      {gameList.map((game, index) => (
        <GameCard
          key={`${game.Naam} - ${index}`}
          game={game}
          handleDetailClick={(SelectedGameID: string) =>
            handleDetailClick(SelectedGameID)
          }
        />
      ))}
    </div>
  );
};
