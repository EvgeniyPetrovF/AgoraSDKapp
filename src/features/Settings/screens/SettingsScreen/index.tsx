import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuth} from '../../../../common/hooks/useAuth';
import CustomButton from '../../../../components/CustomButton';
import {styles} from './styles';

const SettingsScreen: FC = () => {
  const {logout} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton label={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};
export default SettingsScreen;
