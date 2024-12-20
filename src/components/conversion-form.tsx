import React, { useState, useEffect, ChangeEvent } from "react";

import { makeStyles } from "@mui/styles";

import { Grid2 as Grid, InputAdornment, TextField, Theme } from "@mui/material";

import { SyncAlt as SyncIcon } from "@mui/icons-material";

import currencies from "../utils/currencies.js";
import convert from "../utils/conversion.js";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(6),
  },
  icon: {
    margin: theme.spacing(3),
  },
}));

function ConversionForm() {
  const classes = useStyles();

  const [currency, setCurrency] = useState(currencies.usd);

  const [arxValue, setArxValue] = useState(0);
  const [shouldEvaluateArx, setShouldEvaluateArx] = useState(false);

  const [currencyValue, setCurrencyValue] = useState(0);
  const [shouldEvaluateCurrency, setShouldEvaluateCurrency] = useState(false);

  useEffect(() => {
    if (shouldEvaluateCurrency) {
      setCurrencyValue(convert(Number(arxValue), true, currency.typeName));
    }
  }, [arxValue, shouldEvaluateCurrency, currency.typeName]);

  useEffect(() => {
    if (shouldEvaluateArx) {
      setArxValue(convert(Number(currencyValue), false, currency.typeName));
    }
  }, [currencyValue, shouldEvaluateArx, currency.typeName]);

  function handleArxChange(value: string): void {
    setShouldEvaluateArx(false);
    setShouldEvaluateCurrency(true);

    const arxValue: number = parseInt(value, 10);
    if (isNaN(arxValue)) {
      throw new TypeError("Failed to parse input value for Currency.");
    }
    setArxValue(convert(Number(arxValue), true, currency.typeName));
  }

  function handleCurrencyChange(value: string): void {
    setShouldEvaluateArx(true);
    setShouldEvaluateCurrency(false);

    const currencyValue: number = parseInt(value, 10);
    if (isNaN(currencyValue)) {
      throw new TypeError("Failed to parse input value for Currency.");
    }
    setCurrencyValue(convert(Number(currencyValue), true, currency.typeName));
  }

  return (
    <Grid className={classes.container}>
      <Grid
        container
        direction="row"
        // justify="space-around"
        alignItems="center"
      >
        <TextField
          label="ARX"
          value={arxValue}
          onChange={(e) => handleArxChange(e.target.value)}
        />
        <SyncIcon className={classes.icon} />
        <TextField
          label={currency.name}
          value={currencyValue}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {currency.label}
                </InputAdornment>
              ),
            },
          }}
          onChange={(e) => handleCurrencyChange(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}

export default ConversionForm;
