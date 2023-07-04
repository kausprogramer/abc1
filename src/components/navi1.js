import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    display: "flex",
  },
  logo: {
    // flexGrow: "1",
    marginLeft:theme.spacing(5),
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navi1() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{padding:theme.spacing(2)}}>
    <AppBar position="static" style={{borderRadius:20, boxShadow:'1px 2px 9px #0c2c4d'}}>
      <CssBaseline />
      <Toolbar style={{justifyContent:'space-between'}}>
        <Typography variant="h4" className={classes.logo}>
          LOGO
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
            <Link to="/signup" className={classes.link}>
              Signup
            </Link>
            
          </div>
        )}
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default Navi1;
