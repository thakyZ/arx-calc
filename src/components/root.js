import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import ConversionForm from './conversion-form';
import ConversionTable from './conversion-table';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
  },
}));

const Root = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <ConversionForm />
          <ConversionTable />
        </Grid>
      </Container>
    </>
  )
};

export default Root;
