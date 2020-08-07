import React from 'react';
import { Link } from 'react-router-dom';
import { Box, useTheme, Theme, Divider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkText: {
    textDecoration: 'none',
    fontSize: 15,
    color: '#000000de',
    lineHeight: 2,
  },
}));

const MenuBar: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <Box>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={'/'} className={classes.linkText}>Lucky Quiz</Link>
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