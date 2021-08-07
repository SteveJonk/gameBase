import { iSingleGameSteam } from './../../Interfaces/iSingleGameSteam';
import parse from 'html-react-parser';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  image: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
    objectPosition: 'top left',
  },
});

const SingleGame: React.FC<iSingleGameSteam> = (props) => {
  const styles = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <img src={props.header_image} alt='header' className={styles.image} />
        <Typography variant='h1' align='left'>
          {props.name}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant='body1'>
          {props.detailed_description ? parse(props.short_description) : null}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SingleGame;
