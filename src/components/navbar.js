import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(0, 2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Navi = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>
          <IconButton color="inherit" className={classes.button}>
            <Typography variant="body1">Home</Typography>
          </IconButton>
          <IconButton color="inherit" className={classes.button}>
            <Typography variant="body1">Login</Typography>
          </IconButton>
          <IconButton color="inherit" className={classes.button}>
            <Typography variant="body1">Signup</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navi;
