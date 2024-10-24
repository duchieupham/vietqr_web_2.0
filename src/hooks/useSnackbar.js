import { SNACKBAR_TRANSITIONS } from '~/components/feedback/Snackbar';
import { useSnackbarContext } from '~/contexts/hooks';

export const SNACKBAR_TYPES = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  INFO: 'info',
  ERROR: 'error',
};

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

  const showSnackbar = (options) => {
    setOpen(true);
    setSnackbar((prev) => ({ ...prev, ...options }));
  };

  return {
    show(options = { ...defaultOptions }) {
      showSnackbar({ type: SNACKBAR_TYPES.DEFAULT, ...options });
    },
    success(options = { ...defaultOptions }) {
      showSnackbar({ type: SNACKBAR_TYPES.SUCCESS, ...options });
    },
    info(options = { ...defaultOptions }) {
      showSnackbar({ type: SNACKBAR_TYPES.INFO, ...options });
    },
    error(options = { ...defaultOptions }) {
      showSnackbar({ type: SNACKBAR_TYPES.ERROR, ...options });
    },
    hide() {
      setOpen(false);
    },
  };
};

export default useSnackbar;
