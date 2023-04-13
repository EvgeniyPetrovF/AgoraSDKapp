import axios from 'axios';

type CurrenciesInfo = {
  startDate: string;
  endDate: string;
  baseCurrency: string;
  currencies: string;
};

const API_KEY = '7XF9mNaGWWaNTtxBT1dQE6UpTBWMk7N6';

export const instance = axios.create({
  baseURL: 'https://api.apilayer.com/currency_data/',
  headers: {
    apikey: API_KEY,
  },
});

class CurrencyAPI {
  static getCurrenciesDataForPeriod = async ({
    startDate,
    endDate,
    baseCurrency,
    currencies,
  }: CurrenciesInfo) => {
    const response = await instance.get(
      `timeframe?start_date=${startDate}&end_date=${endDate}&source=${baseCurrency}&currencies=${currencies}`,
    );

    return response.data;
  };
}

export default CurrencyAPI;
