import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import elearning from './images/maxresdefault.jpg';
import MenuBar from '../../components/menubar';
import Footer from '../../components/footer';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    paddingTop: 60,
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  boxText: {
    width: 150,
    color: '#000',
    background: '#fff',
    margin: '0 auto',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#000'
  },
  titleBar: {
    background: ' #fff',
  },
}),
);

const Home: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <MenuBar></MenuBar>
      <div className={classes.root}>
        <Box style={{backgroundImage: 'linear-gradient(to right, #fff, #f2f9f8)'}}>
          <Container component="main" className={classes.main}>
            <Grid container direction="row" spacing={0}>
              <img src={elearning} width="100%" alt="elearning" style={{border: '1px solid #000'}}></img>
            </Grid>
          </Container>
        </Box>
        <Footer></Footer>
      </div>
    </div>
  );
}

interface Props {
}

export default Home;
