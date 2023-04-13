import React, {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import TextWrapper from '../../../../components/TextWrapper';
import {colors, dimensions, text} from '../../../../constants';

type Props = {
  labels: string[];
  data: number[];
};

const {width} = Dimensions.get('window');

const chartHeight = 450;

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  decimalPlaces: 2,
  color: () => colors.red,
  strokeWidth: 2,
  labelColor: () => colors.black,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '0',
    strokeWidth: '0',
  },
};

const Chart: FC<Props> = ({labels, data}) => {
  return (
    <View style={styles.container}>
      <TextWrapper style={styles.title}>
        RUB currency for the past year
      </TextWrapper>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data,
            },
          ],
        }}
        withVerticalLabels={false}
        width={width}
        height={chartHeight}
        withInnerLines={false}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  chart: {
    margin: dimensions.offset.small,
    borderRadius: dimensions.borderRadius.big,
    paddingHorizontal: dimensions.offset.normal,
  },
  title: {
    fontSize: text.size.big,
    fontWeight: text.weight.bold,
  },
});

export default Chart;
