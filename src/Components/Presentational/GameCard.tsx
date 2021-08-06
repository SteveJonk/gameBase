import React from 'react';
import { iGame } from '../../Interfaces/iGame';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    marginBottom: 20,
  },
});

interface iGameCardProps {
  game: iGame;
  handleDetailClick: (SelectedGameID: string) => void;
}

const GameCard: React.FC<iGameCardProps> = (props) => {
  const { game, handleDetailClick } = props;
  const styles = useStyles();

  return (
    <React.Fragment>
      <Card className={styles.card}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {game.Naam}
          </Typography>
          <Typography color='textSecondary'>{game.Genre}</Typography>
          <Typography variant='body2' component='p'>
            {game['Korte uitleg']}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={() => handleDetailClick(game.SteamID)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default GameCard;
