import { useCallback } from 'react';
import { Alert, Linking } from 'react-native';

export const useOpenEtherscan = (hash?: string) => {
  const handlePress = useCallback(async () => {
    const url = hash ? 'https://etherscan.io/tx/' + hash : undefined;
    if (!url) {
      return;
    }

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [hash]);

  return {
    handlePress,
  };
};
