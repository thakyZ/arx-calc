import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import SyncIcon from '@material-ui/icons/SyncAlt';

import currencies from '../utils/currencies';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: theme.spacing(6),
  },
  icon: {
    margin: theme.spacing(3),
  },
}));

const ConversionForm = () => {
  const classes = useStyles();

  const [currency, setCurrency] = useState(currencies.usd);

  const [arxValue, setArxValue] = useState(0);
  const [shouldEvaluateArx, setShouldEvaluateArx] = useState(false);

  const [currencyValue, setCurrencyValue] = useState(0);
  const [shouldEvaluateCurrency, setShouldEvaluateCurrency] = useState(false);

  useEffect(() => {
    if (shouldEvaluateCurrency) {
      setCurrencyValue(currency.convert.fromArx(arxValue));
    }
  }, [arxValue, shouldEvaluateCurrency]);

  useEffect(() => {
    if (shouldEvaluateArx) {
      setArxValue(currency.convert.toArx(currencyValue));
    }
  }, [currencyValue, shouldEvaluateArx]);

  const handleArxChange = (value) => {
    setShouldEvaluateArx(false);
    setShouldEvaluateCurrency(true);

    setArxValue(value);
  };

  const handleCurrencyChange = (value) => {
    setShouldEvaluateArx(true);
    setShouldEvaluateCurrency(false);

    setCurrencyValue(value);
  };

  return (
    <Grid item className={classes.container}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <TextField
          label="ARX"
          value={arxValue}
          onChange={e => handleArxChange(e.target.value)}
        />
        <SyncIcon className={classes.icon} />
        <TextField
          label={currency.name}
          value={currencyValue}
          InputProps={{
            startAdornment: <InputAdornment position="start">{currency.label}</InputAdornment>,
          }}
          onChange={e => handleCurrencyChange(e.target.value)}
        />
      </Grid>
    </Grid>
  )
};

export default ConversionForm;
