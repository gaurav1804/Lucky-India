import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import elearning from '../Home/images/onlinelearning1.png';
import MenuBar from '../../components/menubar';
import Footer from '../../components/footer';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: ' #fff',
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
  },gridList: {
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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}),
);

const Aboutus: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>My Lucky India</title>
        <meta charSet="utf-8" />
        <meta name="About Us" content="A Quiz application" />
      </Helmet>
      <CssBaseline />
      <MenuBar></MenuBar>
      <div className={classes.root}>
        <Box>
          <Container style={{textAlign: 'center'}}>
            <h2 style={{textAlign: 'center', color: '#0060d3'}}>About Us</h2 >
            <Grid container spacing={3} style={{ padding: '0px 80px 0px 80px' }}>
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.paper}>Our Idea is to help anyone find their perfect tutor so they can achieve their learning goals. Whiz can assist learners with constructive advice to help.</Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <h2 style={{color: '#4599fd'}}>Where did we start</h2>
                  <Typography variant="body1">Whiz founders Preeti Manchanda, a business analyst and Kapil Manchanda, a technology analyst , created whiz platform in 2020 with an ingenious objective to take the hassle out of finding online tutor.
                    Whiz was Born out of faith that by bringing all the best possibilities together in one place which help anyone to find the perfect tutor for them. We are still stepping forward with this belief.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3} style={{ padding: '20px 80px 0px 80px' }}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <h2 style={{color: '#23c176'}}>How have we maturated</h2>
                  <Typography variant="body1">Since our establishment we've grown to become the leading marketplace for learner and online tutoring.
                    In the meantime whiz trying to built a platform that allows anyone to connect with talented and trusted mentors and seamlessly classes and manage their lessons.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3} style={{ padding: '20px 80px 0px 80px' }}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <h2 style={{color: '#6267ab'}}>Where are we going</h2>
                  <Typography variant="body1">
                    <div style={{paddingBottom: 10}}>
                      One-to-one and one-to-many tuition can be firebrand. Intrinsically private tutors can help learners to boost their confidence and learn a new skill. We have a master plan to carry on with helping students to meet their learning goals. We are committed to facilitating as many people as possible with access to great tutor.
                    </div><Divider/> 
                    <div style={{paddingTop: 10}}>
                      Whiz has group of experties that work together to develop and execute bold visions – resulting in innovative strategy, leading performance, remarkable visibility, and award-winning experiences for our users.
                    </div>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Aboutus;
