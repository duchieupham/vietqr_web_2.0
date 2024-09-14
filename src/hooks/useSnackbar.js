import { SNACKBAR_TRANSITIONS } from '~/components/feedback/Snackbar';
import { useSnackbarContext } from '~/contexts/hooks';

const useSnackbar = () => {
  const defaultOptions = {
    transition: SNACKBAR_TRANSITIONS.FADE,
    message: '',
    duration: 2000,
    position: {
      vertical: 'top',
      horizontal: 'right',
    },
  };
  const { setSnackbar, setOpen } = useSnackbarContext();
  const handleSnackbar = (options) => {
    setOpen(true);
    setSnackbar((prev) => ({ ...prev, ...options }));
  };

  return {
    show({ message, duration, transition, position }) {
      const options = {
        type: 'default',
        transition: transition || defaultOptions.transition,
        message: message || defaultOptions.message,
        duration: duration || defaultOptions.duration,
        position: position || defaultOptions.position,
      };
      handleSnackbar(options);
    },
    success({ message, duration, transition, position }) {
      const options = {
        type: 'success',
        transition: transition || defaultOptions.transition,
        message: message || defaultOptions.message,
        duration: duration || defaultOptions.duration,
        position: position || defaultOptions.position,
      };

      handleSnackbar(options);
    },
    error({ message, duration, transition, position }) {
      const options = {
        type: 'error',
        transition: transition || defaultOptions.transition,
        message: message || defaultOptions.message,
        duration: duration || defaultOptions.duration,
        position: position || defaultOptions.position,
      };

      handleSnackbar(options);
    },
    hide() {
      setOpen(false);
    },
  };
};

export default useSnackbar;
