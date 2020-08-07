import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import elearning from '../Home/images/quizshow.jpg';
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
  },
}),
);

const Contact: React.FC = () => {
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
                    width="70%"
                    alt="elearning"
                    style={{borderRadius: 15}}
                  ></img>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <Container>
            <h1>Contact Us</h1>
            <div>
              <p>Customer Care Enquiry Mobile / WhatsApp: +91 80810 08878 (Mr. BabuLuck)</p>
            </div>
          </Container>
        </Box>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Contact;
