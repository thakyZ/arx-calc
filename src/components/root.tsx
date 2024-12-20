import * as React from "react";

import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import {
  Container,
  CssBaseline,
  Grid2 as Grid,
  Link,
  Typography,
} from "@mui/material";

import ConversionForm from "./conversion-form.js";
import ConversionTable from "./conversion-table.js";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "100vh",
  },
  footer: {
    marginTop: theme.spacing(4),
  },
}));

const theme: Theme = createTheme();

function AppContent() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.container}
      >
        <ConversionForm />
        <ConversionTable />
        <Typography variant="caption" className={classes.footer}>
          2019 rjhoff |{" "}
          <Link href="https://github.com/rjhoffmann/arx-calc">source</Link>
        </Typography>
      </Grid>
    </Container>
  );
}

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
}

export default Root;
