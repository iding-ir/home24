export const formatter = (
  intlNumberFormatValues = ["de-DE", "currency", "EUR"]
) => {
  return new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
  });
};
