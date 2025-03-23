import { ToWords } from 'to-words';

export const amountToWords = (amount = 0) => {
  const toWords = new ToWords({
    localeCode: 'en-US',
    converterOptions: {
      currency: true,
      doNotAddOnly: true,
    },
  });

  return toWords.convert(amount);
};

export const formatCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  });

  return formatter.format(amount);
};
