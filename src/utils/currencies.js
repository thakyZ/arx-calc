import { pow, round } from 'mathjs';

export default {
  usd: {
    name: 'USD',
    label: '$',
    convert: {
      toArx: {
        quad: (x) => round(0.264827 * pow(x, 3) - 15.7605 * pow(x, 2) + 1690.46 * x - 1883.31),
      },
      fromArx: {
        quad: (x) => round((-2.99885e-14 * pow(x, 3) + 2.56896e-9 * pow(x, 2) + 0.00063309 * x + 0.984345), 2),
      },
    },
  },
  gbp: { name: 'GBP', label: '£'},
  eur: { name: 'EUR', label: '€' },
};
