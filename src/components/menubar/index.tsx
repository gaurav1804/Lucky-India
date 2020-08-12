import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: 16,
    flexGrow: 1,
  },
  linkText: {
    textDecoration: 'none',
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 2,
  },
}));

const MenuBar: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static" color="default" elevation={0} style={{background: '#000000'}}>
        <Toolbar>
          <Typography className={classes.title}>
            <Link to={'/'} className={classes.linkText}>LUCKY QUIZ</Link>
          </Typography>
          <Button color="inherit">
            <Link to={'/aboutus'} className={classes.linkText}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/quiz'} className={classes.linkText}>Quiz result</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/contact'} className={classes.linkText}>Contact</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

interface Props {
}

export default MenuBar;