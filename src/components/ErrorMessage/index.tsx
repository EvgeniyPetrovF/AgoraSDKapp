import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';

interface Props extends ViewProps {
  message?: string;
  visible?: boolean;
}

const ErrorMessage: FC<Props> = ({message, visible, style, ...rest}) => {
  return visible ? (
    <View style={[styles.container, style]} {...rest}>
      {message && <TextWrapper style={styles.text}>{message}</TextWrapper>}
    </View>
  ) : null;
};

export default ErrorMessage;
