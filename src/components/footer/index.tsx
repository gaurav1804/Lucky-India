import React from 'react';
import { Container, Grid } from '@material-ui/core';

const Footer: React.FC = () => {

  return (
    <footer style={{marginTop: 60, background: '#000', color: '#fff'}}>
      <Container>
        <Grid container direction="row" spacing={0} style={{paddingTop: 5, paddingBottom: 5}}>
          <Grid item xs={12} sm={5}>
            <p>Educational quiz Platform</p>
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>
          <Grid item xs={12} sm={3}>
            <p>Copyright 2020 @</p>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
