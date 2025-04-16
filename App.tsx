import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import TabNavigation from './src/navigation/TabNavigation';
import GlobalFont from 'react-native-global-font';

export default function App() {
  useEffect(() => {
    // Set global font
    GlobalFont.applyGlobal('Poppins-Regular');
  }, []);

  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}
