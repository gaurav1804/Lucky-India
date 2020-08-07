import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import elearning from './images/quizshow.png';
import quiz from './images/quiz-night.jpg';
import MenuBar from '../../components/menubar';
import Footer from '../../components/footer';
import Button from '@material-ui/core/Button';
import { url } from 'inspector';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  tutors: {
    background: '#fff',
    textAlign: 'center',
    paddingTop: 10,
  },
  boxWhite: {
    minHeight: 125,
    background: '#fff',
    borderRadius: 5,
    boxShadow: '0px 0px 5px 0px #c3c3c3',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: '#000',
  },
  titleBar: {
    background: ' #fff',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    height: '100vh',
    background: '#000000d4',
  },
  linkText: {
    background: 'linear-gradient(to right, #6681ea, #7e43aa)',
    padding: 10,
    borderRadius: 5,
    textDecoration: 'none',
    fontSize: 15,
    color: '#000000de',
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
        <Box style={{ background: 'linear-gradient(to right, #6681ea, #7e43aa)' }}>
          <Container component="main" className={classes.main}>
            <Grid container direction="row" spacing={0}>
              <Grid item xs={12} sm={6}>
                <div style={{ padding: 15 }}>
                  <Typography variant="h2" component="h6" gutterBottom>
                    <span style={{ color: '#fff' }}>DIGITAL WORLD </span> <span style={{ color: '#fff' }}> OF </span>
                    <span style={{ color: '#fff' }}> GAMING</span>
                  </Typography>
                  <Typography variant="h6">
                    {
                      'Lucky Quiz has group of experties that work together to develop and execute bold visions – resulting in innovative strategy, leading performance, remarkable visibility, and award-winning experiences for our users.'
                    }
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div style={{marginBottom: 30, textAlign: 'center' }}>
                  <img
                    src={elearning}
                    width="80%"
                    alt="elearning"
                  ></img>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container component="main" className={classes.main}>
            <Grid container direction="row" spacing={0}>
              <Grid item xs={12} sm={4}>
                <div style={{ padding: 10}}>
                  <Typography gutterBottom style={{fontSize: 18, lineHeight: 2}}>
                    {
                      'Intrinsically quiz can help learners to boost their confidence and learn a new skill.'
                    }
                  </Typography>
                  <Typography gutterBottom style={{fontSize: 18, lineHeight: 2}}>
                    {
                      'We have a master plan to carry on with helping people to meet their gaming goals.'
                    }
                  </Typography>
                  <Typography gutterBottom style={{fontSize: 18, lineHeight: 2}}>
                    {
                      'We are committed to facilitating as many people as possible with access to great quiz.'
                    }
                  </Typography>
                </div>
                <div>
                <Button color="inherit">
                  <Link to={'/aboutus'} className={classes.linkText}>Read More</Link>
                </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{padding: 10}}>
                  <img
                    src={quiz}
                    width="100%"
                    alt="quiz"
                    style={{ borderRadius: 8}}
                  ></img>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div style={{ padding: 10 }}>
                  <div style={{background: 'linear-gradient(to right, #6681ea, #7e43aa)' , borderRadius: 5, padding: 10}}>
                    <span>Quiz Game</span>
                  </div>
                  <div>
                    <h4>Fun Quiz</h4>
                    <p>From 
                      <span>14:00  hr  To   15:00  hr</span>
                    </p>
                    <p>Result</p>
                  </div>
                  <div>
                    <h4>Wonder Quiz</h4>
                    <p>From 
                      <span>14:00  hr  To   15:00  hr</span>
                    </p>
                    <p>Result</p>
                  </div>
                  <div>
                    <h4>Lucky Quiz</h4>
                    <p>From 
                      <span>14:00  hr  To   15:00  hr</span>
                    </p>
                    <p>Result</p>
                  </div>
                </div>
              </Grid>
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
