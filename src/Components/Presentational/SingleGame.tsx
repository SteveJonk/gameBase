import { iSingleGameSteam } from './../../Interfaces/iSingleGameSteam';
import parse from 'html-react-parser';
import { Grid, Typography } from '@material-ui/core';

const SingleGame: React.FC<iSingleGameSteam> = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <img src={props.header_image} alt='header' width='500px' />
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
