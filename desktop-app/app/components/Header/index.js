import React from 'react';
import Grid from '@material-ui/core/Grid';
import {ToastContainer} from 'react-toastify';
import {makeStyles} from '@material-ui/core/styles';
import AddressBar from '../../containers/AddressBar';
import ScrollControlsContainer from '../../containers/ScrollControlsContainer';
import HttpAuthDialog from '../HttpAuthDialog';
import os from 'os';
import PermissionPopup from '../PermissionPopup';

import NavigationControlsContainer from '../../containers/NavigationControlsContainer';
import BookmarksBar from '../../containers/BookmarksBarContainer';
import AppNotification from '../AppNotification/AppNotification';
import Logo from '../icons/Logo';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.firstRow}>
        <Logo className={classes.logo} width={40} height={40} />
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <NavigationControlsContainer />
          </Grid>
          <Grid item style={{flex: 1}}>
            <AddressBar />
            <PermissionPopup />
          </Grid>
          <Grid item>
            <ScrollControlsContainer />
          </Grid>
        </Grid>
      </div>
      <BookmarksBar />
      <HttpAuthDialog />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        rtl={false}
        draggable
        pauseOnHover
        toastClassName={classes.darkToast}
      />
      <AppNotification />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.background.l1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: os.platform() === 'darwin' ? '20px 0 5px' : '0 0 0',
    boxShadow: `0 ${theme.palette.mode({
      light: '0px',
      dark: '3px',
    })} 5px rgba(0, 0, 0, 0.35)`,
    zIndex: 5,
  },
  firstRow: {
    display: 'flex',
  },
  logo: {
    margin: '0 3px',
  },
  darkToast: {
    background: '#696969 !important',
    borderRadius: '5px !important',
    fontSize: '15px',
    fontWeight: 'lighter',
  },
}));

export default Header;
