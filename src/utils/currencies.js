import { round } from 'mathjs';
import { endpoints, slope, intercept } from './conversion'

export const types = { usd: 'usd', gbp: 'gbp', eur: 'eur' };

export default {
  usd: {
    name: 'USD',
    label: '$',
    typeName: types.usd,
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
        const e = endpoints(x, true, 'usd');
        const m = slope(e);
        const b = intercept(m, e[0]);

        return round(m * x + b, 2);
      },
    },
  },
  gbp: { name: 'GBP', label: '£', typeName: types.gbp },
  eur: { name: 'EUR', label: '€', typeName: types.eur },
};
