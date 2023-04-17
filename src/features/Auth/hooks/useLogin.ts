import {useEffect, useState} from 'react';
import FingerprintScanner, {Biometrics} from 'react-native-fingerprint-scanner';
import {useAuth} from '../../../common/hooks/useAuth';

const getMessage = (biometryType: Biometrics) => {
  if (biometryType === 'Face ID') {
    return 'Scan your Face on the device to continue';
  } else {
    return 'Scan your Fingerprint on the device scanner to continue';
  }
};

const useLoginForm = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [biometryType, setBiometryType] = useState<Biometrics>();

  const {signIn} = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const biometryType = await FingerprintScanner.isSensorAvailable();
        setBiometryType(biometryType);
      } catch (e) {
        console.log('isSensorAvailable error => ', e);
        setError((e as Error).message);
      }
    })();

    return () => FingerprintScanner.release();
  }, []);

  const showAuthenticationDialog = async () => {
    if (biometryType) {
      await FingerprintScanner.authenticate({
        description: getMessage(biometryType),
      });
      signIn();
    } else {
      throw new Error('biometric authentication is not available');
    }
  };

  const loginHandler = async () => {
    try {
      setIsLoading(true);
      await showAuthenticationDialog();
    } catch (e) {
      console.log('Authentication error is => ', e);
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    loginHandler,
    biometryType,
  };
};

export default useLoginForm;
