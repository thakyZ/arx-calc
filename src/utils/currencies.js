import { pow, round } from 'mathjs';

export default {
  usd: {
    name: 'USD',
    label: '$',
    convert: {
      toArx: (x) => {
        if (x <= 3.99) return round(1253.13 * x);
        else if (x <= 6.99) return round(1273.33 * x - 80.6);
        else if (x <= 12.99) return round(1480 * x - 1525.2);
        else if (x <= 18.99) return round(1516.67 * x - 2001.5);
        else if (x <= 37.99) return round(1431.58 * x - 385.684);
        else if (x <= 59.99) return round(2090.91 * x - 25433.6);

        else return round(1666.94 * x);
      },
      fromArx: (x) => {
        if (x <= 5000) return round((0.000798 * x + 4.44089e-16), 2);
        else if (x <= 8820) return round((0.00078534 * x + 0.0632984), 2);
        else if (x <= 17700) return round((0.000675676 * x + 1.03054), 2);
        else if (x <= 26800) return round((0.000659341 * x + 1.31967), 2);
        else if (x <= 54000) return round((0.000698529 * x + 0.269412), 2);
        else if (x <= 100000) return round((0.000478261 * x + 12.1639), 2);

        return round((0.0005999 * x), 2);
      },
    },
  },
  gbp: { name: 'GBP', label: '£'},
  eur: { name: 'EUR', label: '€' },
};
