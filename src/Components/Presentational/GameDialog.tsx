import React from 'react';
import {
  AppBar,
  createStyles,
  Dialog,
  DialogContent,
  IconButton,
  makeStyles,
  Slide,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { Close } from '@material-ui/icons';

import SingleGameQuery from '../Container/SingleGameQuery';
import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface iErrorMessageProps {
  handleClose: () => void;
  modalOpen: boolean;
  steamID: string;
}

const GameDialog: React.FC<iErrorMessageProps> = (props) => {
  const { handleClose, modalOpen, steamID } = props;
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={modalOpen}
      >
        <AppBar className={classes.appBar} color='primary'>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <Close />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              {steamID ? steamID : 'Geen ID ingevuld'}
            </Typography>
          </Toolbar>
        </AppBar>

        <DialogContent dividers>
          <br />
          {steamID ? (
            <SingleGameQuery steamID={steamID} />
          ) : (
            <React.Fragment>
              <ErrorMessage />
              <Typography variant='h5' align='center'>
                Er is geen steam id ingevuld voor deze game
              </Typography>
            </React.Fragment>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameDialog;
