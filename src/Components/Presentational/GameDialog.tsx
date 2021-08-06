import {
  AppBar,
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Slide,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';

import { Close } from '@material-ui/icons';
import React from 'react';

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
              {steamID ? steamID : 'No ID filled in'}
            </Typography>
          </Toolbar>
        </AppBar>

        <DialogContent dividers>
          {
            //TODO Hier moet een component komen om de api aanroep te doen
          }
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
            ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameDialog;
