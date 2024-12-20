import React from "react";

import { makeStyles } from "@mui/styles";

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Theme,
} from "@mui/material";

import { green, grey } from "@mui/material/colors";

import _map from "lodash/map";

import currencies from "../utils/currencies.js";
import { knownValues } from "../utils/conversion.js";

const useStyles = makeStyles((theme: Theme) => ({
  base: {
    marginRight: theme.spacing(0.25),
  },
  bonus: {
    color: green[500],
  },
  bonusWrapper: {
    color: grey[400],
  },
  total: {
    marginLeft: theme.spacing(1),
    color: grey[400],
  },
}));

const ConversionTable = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ARX (Bonus) / Total</TableCell>
            <TableCell align="right">
              {currencies.gbp.name} {currencies.gbp.label}
            </TableCell>
            <TableCell align="right">
              {currencies.eur.name} {currencies.eur.label}
            </TableCell>
            <TableCell align="right">
              {currencies.usd.name} {currencies.usd.label}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_map(knownValues, (c) => (
            <TableRow>
              <TableCell>
                <span className={classes.base}>{c.arx}</span>
                <span className={classes.bonusWrapper}>(</span>
                <span className={classes.bonus}>+{c.bonus}</span>
                <span className={classes.bonusWrapper}>)</span>
                <span className={classes.total}>{c.arx + c.bonus}</span>
              </TableCell>
              <TableCell align="right">
                {currencies.gbp.label}
                {c.gbp}
              </TableCell>
              <TableCell align="right">
                {currencies.eur.label}
                {c.eur}
              </TableCell>
              <TableCell align="right">
                {currencies.usd.label}
                {c.usd}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ConversionTable;
