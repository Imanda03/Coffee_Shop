import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Route from './Route';

const App = () => {
  const [user, setUser] = useState<any>();

  console.log('user state', user);
  return (
    <SafeAreaProvider>
        <Route />
    </SafeAreaProvider>
  );
};

export default App;
