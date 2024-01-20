import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  AppState,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as Updates from 'expo-updates';
import { useFonts } from 'expo-font';


let appState = '';

export default function RootContainer() {
  const dispatch = useDispatch();

  // const [appState, setAppState] = useState(AppState.currentState);
  const [initilized, setInitilized] = useState(false);
  // const [updating, setUpdating] = useState(false);
  //   const [fontsLoaded] = useFonts({
  //     'Gotham-Light': require('../assets/fonts/gotham-light.ttf'),
  //     'Gotham-Medium': require('../assets/fonts/gotham-medium.ttf'),
  //     'Gotham-Bold': require('../assets/fonts/gotham-bold.ttf'),
  //   });

  return <View />;
}
