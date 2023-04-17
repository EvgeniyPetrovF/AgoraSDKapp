import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/CustomButton';
import ErrorMessage from '../../../../components/ErrorMessage';
import TextWrapper from '../../../../components/TextWrapper';
import useLoginForm from '../../hooks/useLogin';
import {styles} from './styles';

const LoginForm = () => {
  const {isLoading, loginHandler, biometryType, error} = useLoginForm();

  return (
    <View style={styles.formContainer}>
      {biometryType && (
        <TextWrapper style={styles.text}>
          {`Biometry Type is: ${biometryType}`}
        </TextWrapper>
      )}
      <CustomButton
        label="Sign In"
        onPress={loginHandler}
        disabled={isLoading}
        pending={isLoading}
      />
      <ErrorMessage
        visible={!!error}
        message={error}
        style={styles.errorMessage}
      />
    </View>
  );
};
export default LoginForm;
