import { useMemo } from 'react';

type UsePrice = {
  currencyCode?: string;
  locale?: string;
  baseAmount?: number;
  amount?: number;
}

function formatCurrency({ locale, currencyCode, amount = 0 }: UsePrice) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });

  return formatCurrency.format(amount);
}

export function usePrice(data: UsePrice) {
  const {
    locale = "en",
    currencyCode = 'USD',
    amount,
    baseAmount,
  } = data ?? {};
  const value = useMemo(() => {
    if (typeof amount !== 'number' || !currencyCode) return '';
    return formatCurrency({ locale, currencyCode, amount, baseAmount });
  }, [amount, baseAmount, currencyCode, locale]);

  return typeof value === 'string' ? { price: value } : value;
}
