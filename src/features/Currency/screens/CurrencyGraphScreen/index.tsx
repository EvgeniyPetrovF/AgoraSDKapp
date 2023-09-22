import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import Loader from '../../../../components/Loader';
import Chart from '../../components/Chart';
import useCurrency from '../../hooks/useCurrency';
import {styles} from './styles';

const CurrencyGraphScreen: FC = () => {
  const {currencyHistory, isLoading} = useCurrency();

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Chart
          labels={Object.keys(currencyHistory!)}
          data={Object.values(currencyHistory!).map(item => item?.USDRUB)}
        />
      )}
    </SafeAreaView>
  );
};
export default CurrencyGraphScreen;
