import React, {useEffect} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#fff',
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

const Quiz: React.FC = () => {
  const classes = useStyles();

  const createData = (time: string, title: number, detail: string) => {
	return { time, title, detail };
  }

  useEffect(() => {
    const getQuiz = async() => {
      let newQuiz:any = await getQuizList();
      console.log(newQuiz);
    }
    getQuiz();
  }, []);

  const renderTable = () => {
	const rows = [
		createData('11:35 00 45', 159, 'One Girl Said, This will make it better'),
		createData('11:35 00 45', 237, 'One Girl Said, This will make it better'),
		createData('11:35 00 45', 262, 'One Girl Said, This will make it better'),
	];

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
            {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
              {row.time}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="left">{row.detail}</TableCell>
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
        <Box style={{backgroundImage: 'linear-gradient(to right, #fff, #f2f9f8)'}}>
        	<Container component="main" className={classes.main}>
				<Grid container direction="row" spacing={0}>
					<Grid item xs={12}>
						<h3>Filter by date</h3>
						<input type="date"></input>
					</Grid>
				</Grid>
				<Grid container direction="row" spacing={0}>
				<Grid item xs={12} sm={4}>
					<h2>Fun Quiz</h2>
					{renderTable()}
				</Grid>
				<Grid item xs={12} sm={4}>
					<h2>Wonder Quiz</h2>
					{renderTable()}
				</Grid>
				<Grid item xs={12} sm={4}>
					<h2>Lucky Quiz</h2>
					{renderTable()}
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
