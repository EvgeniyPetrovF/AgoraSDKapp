import React, {useEffect, useState} from 'react';
import {addYears, format} from 'date-fns';
import CurrencyAPI from '../../../services/API/Currency';

const graphData = {
  currencies: 'RUB',
  baseCurrency: 'USD',
  startDate: format(addYears(new Date(), -1), 'yyyy-MM-dd'),
  endDate: format(new Date(), 'yyyy-MM-dd'),
};

const useCurrency = () => {
  const [currencyHistory, setCurrencyHistory] = useState<Record<
    string,
    Record<string, number>
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await CurrencyAPI.getCurrenciesDataForPeriod(graphData);
        setCurrencyHistory(res.quotes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {currencyHistory, isLoading};
};

export default useCurrency;
