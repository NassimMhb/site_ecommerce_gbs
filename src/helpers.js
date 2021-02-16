export const formatPriceForHumans = price =>
  (price / 100).toLocaleString('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });
