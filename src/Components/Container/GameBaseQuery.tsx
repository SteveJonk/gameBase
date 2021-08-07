import { useEffect, useState, FC } from 'react';
import { useQuery } from 'react-query';

import { iGame } from '../../Interfaces/iGame';

import LoadingAnimation from './../Presentational/LoadingAnimation';
import ErrorMessage from '../Presentational/ErrorMessage';
import GameCard from '../Presentational/GameCard';
import GameDialog from '../Presentational/GameDialog';
import { Button, makeStyles } from '@material-ui/core';

var array = require('lodash/array');

const useStyles = makeStyles({
  button: {
    marginBottom: 30,
    margin: '0 auto',
    display: 'block',
  },
});

export const GameBaseQuery: FC = () => {
  const styles = useStyles();

  const [gameList, setGameList] = useState<iGame[]>([]);
  const [gameListLimit, setGameListLimit] = useState<number>(10);
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
      {array.take(gameList, gameListLimit).map((game: iGame, index: number) => (
        <GameCard
          key={`${game.Naam} - ${index}`}
          game={game}
          handleDetailClick={(SelectedGameID: string) =>
            handleDetailClick(SelectedGameID)
          }
        />
      ))}
      <Button
        variant='contained'
        color='primary'
        className={styles.button}
        onClick={() => {
          setGameListLimit(gameListLimit + 10);
        }}
      >
        Laad meer
      </Button>
    </div>
  );
};
