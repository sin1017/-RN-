import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary';

import { store, persistor } from './redux/store';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//@ts-ignore
import backgroundImg from './assets/pz-logo.png';

export default function App() {
  return (
    <View style={styles.mainContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            source={backgroundImg} // 替換為您的小圖路徑
            style={{ width: 197, height: 127}}
          />
          <Text style={styles.t}></Text>
          <Text style={styles.t}>「 Hello 」</Text>
          <Text style={styles.t}>Welcome to ParaZeni App.</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  t:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#003060'
  },
});
