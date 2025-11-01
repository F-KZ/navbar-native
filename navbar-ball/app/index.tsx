import React from 'react';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabs from './containers/BottomTabs';

const App = () => {
  React.useEffect(() => {
    changeNavigationBarColor('white');
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <BottomTabs />
    </SafeAreaProvider>
  );
};

export default App;
