import { StyleSheet, View } from 'react-native';
import React from 'react';
import Banner from './body/banner';
import Main from './body/main';
function body(value) {
  return (
    <View>
      <Banner />
      <Main />
    </View>
  )
}

export default body

