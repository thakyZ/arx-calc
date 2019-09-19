import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import { green, grey } from '@material-ui/core/colors';

import _map from 'lodash/map';

import currencies from '../utils/currencies';
import conversion from '../utils/conversion';

const useStyles = makeStyles((theme) => ({
  base: { marginRight: theme.spacing(1) },
  bonus: { color: green[500] },
  total: { marginLeft: theme.spacing(1), color: grey[400] },
}));

const ConversionTable = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ARX (Bonus) / Total</TableCell>
            <TableCell align="right">{currencies.gbp.name} {currencies.gbp.label}</TableCell>
            <TableCell align="right">{currencies.eur.name} {currencies.eur.label}</TableCell>
            <TableCell align="right">{currencies.usd.name} {currencies.usd.label}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_map(conversion, (c) => (
            <TableRow>
              <TableCell>
                <span className={classes.base}>{c.arx}</span>
                <span>(</span>
                <span className={classes.bonus}>+{c.bonus}</span>
                <span>)</span>
                <span className={classes.total}>{c.arx + c.bonus}</span>
              </TableCell>
              <TableCell align="right">{currencies.gbp.label}{c.gbp}</TableCell>
              <TableCell align="right">{currencies.eur.label}{c.eur}</TableCell>
              <TableCell align="right">{currencies.usd.label}{c.usd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
};

export default ConversionTable;
