import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'

import SyncIcon from '@material-ui/icons/SyncAlt';

import currencies from '../utils/currencies';
import useDebounce from '../hooks/useDebounce';

import ConversionTable from './conversion-table';

const Root = () => {
  const [currency, setCurrency] = useState(currencies.usd);

  const [arxValue, setArxValue] = useState(0);
  const [shouldEvaluateArx, setShouldEvaluateArx] = useState(true);

  const [currencyValue, setCurrencyValue] = useState(0);
  const [shouldEvaluateCurrency, setShouldEvaluateCurrency] = useState(true);

  useEffect(() => {
    if (shouldEvaluateCurrency) {
      setCurrencyValue(arxValue / 1250);
    }
  }, [arxValue, shouldEvaluateCurrency]);

  useEffect(() => {
    if (shouldEvaluateArx) {
      setArxValue(currencyValue * 1250)
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
    <Container maxWidth="md" height="100%">
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <TextField
          label="ARX"
          value={arxValue}
          onChange={e => handleArxChange(e.target.value)}
        />
        <SyncIcon />
        <TextField
          label={currency.name}
          value={currencyValue}
          onChange={e => handleCurrencyChange(e.target.value)}
        />
      </Grid>
      <ConversionTable />
    </Container>
  );
};

export default Root;
