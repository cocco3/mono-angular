export const formatCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  });

  return formatter.format(amount);
};
