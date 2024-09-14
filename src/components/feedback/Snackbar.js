import { Alert, Fade, Snackbar as MUISnackbar } from '@mui/material';
import _upperFirst from 'lodash-es/upperFirst';
import { lazy } from 'react';
import { useSnackbarContext } from '~/contexts/hooks';

const CACHE_TRANSITIONS = {};

export const SNACKBAR_TRANSITIONS = {
  FADE: 'fade',
  SLIDE: 'slide',
  GROW: 'grow',
};

export const SNACKBAR_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  DEFAULT: 'default',
};

const Snackbar = () => {
  const { open, setOpen, snackbar } = useSnackbarContext();
  const { transition, message, duration, type, position } = snackbar;

  const onClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // const Transition = () => {
  //   const transitionType = _upperFirst(transition);

  //   if (!Object.hasOwn(CACHE_TRANSITIONS, transition)) {
  //     CACHE_TRANSITIONS[transitionType] = lazy(() =>
  //       import(`@mui/material/${transitionType}`).then((modules) => ({
  //         default: modules[transitionType] ?? Fade,
  //       })),
  //     );
  //   }
  //   return CACHE_TRANSITIONS[transitionType];
  // };

  return type !== 'default' ? (
    <MUISnackbar
      open={open}
      onClose={onClose}
      anchorOrigin={position}
      TransitionComponent={Fade}
      autoHideDuration={duration}
      key={message}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </MUISnackbar>
  ) : (
    <MUISnackbar
      open={open}
      onClose={onClose}
      anchorOrigin={position}
      TransitionComponent={Fade}
      message={message}
      autoHideDuration={duration}
      key={message}
    />
  );
};

export default Snackbar;
