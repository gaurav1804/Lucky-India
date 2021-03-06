import React, {useEffect} from 'react';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Grid, Box } from '@material-ui/core';
import MenuBar from '../../components/menubar';
import Footer from '../../components/footer';
import { getQuizList } from '../../api';
import imageBanner from './images/banner.jpg'

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#fff',
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

const Quiz: React.FC = () => {
  const classes = useStyles();
  const [quizData, setQuizData] = React.useState<any>();
  const [filteredData, setFilteredData] = React.useState<any>();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const formatDate = (date: Date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
  
  const filterQuiz = (date: any) => {
    const newList = quizData.filter((d: any) => {
      return d.date === date;
    });
    setFilteredData(newList);
  }
  
  const filterTodayQuiz = (quiz: any) => {
    let today = new Date();

    const newList = quiz.filter((d: any) => {
      return d.date === formatDate(today);
    });

    setFilteredData(newList);
  }

  const handleDate = (event: any) => {
    const date = event.target.value;
    filterQuiz(date);
  }

  const secondsToHM = (d: any) => {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    // let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + ':' : '00';
    let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "00";
    return hDisplay + mDisplay; 
  }

  useEffect(() => {
    const getQuiz = async() => {
      let newQuizData:any = await getQuizList();    
      setQuizData(newQuizData.sort((a: any, b: any) => parseFloat(a.startTime) - parseFloat(b.startTime)));
      filterTodayQuiz(newQuizData);
    }
    getQuiz();
  }, []);

  const renderTable = (type: string) => {

      return (
        <TableContainer component={Paper} style={{width: '80%'}}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell align="right">Title No.</TableCell>
                <TableCell align="left">Optional details</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {filteredData && filteredData.map((row: any) => (
              <TableRow key={row.id}>
                { row.quizType === type ? <>
                    <TableCell component="th" scope="row">
                    {secondsToHM(row.startTime)} - {secondsToHM(row.EndTime)}
                    </TableCell>
                    <TableCell align="right">{row.titleNumber}</TableCell>
                    <TableCell align="left">{row.optionDetail}</TableCell>
                  </> : <></> 
                }
              </TableRow>
            ))}
          </TableBody>
          </Table>
      	</TableContainer>
      )
  }
  return (
    <div>
      <MenuBar></MenuBar>
      <div className={classes.root}>
        <Box style={{ background: 'linear-gradient(to right, #FF0000, #8B0000)' }}>
          <Container>
            <Grid container direction="row">
              <Grid item xs={12} sm={6}>
                {
                  matches ? <h1 style={{fontFamily: 'georgia', color: '#ffffff'}}>Welcome to Luck World</h1> : <img src={imageBanner} style={{width: '100%'}} alt={imageBanner}></img>
                }
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box style={{backgroundImage: 'linear-gradient(to right, #fff, #f2f9f8)'}}>
        	<Container component="main" style={{paddingTop: 10}}>
            <Grid container direction="row" spacing={0}>
              <Grid item xs={12}>
                <h3>Filter by date</h3>
                <input type="date" onChange={handleDate}></input>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={0}>
              <Grid item xs={12} sm={4}>
                <h2>Fun Quiz</h2>
                {renderTable('FunQuiz')}
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2>Wonder Quiz</h2>
                {renderTable('WonderQuiz')}
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2>Lucky Quiz</h2>
                {renderTable('LuckyQuiz')}
              </Grid>
				    </Grid>
			    </Container>
        </Box>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Quiz;
