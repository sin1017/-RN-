import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//@ts-ignore
import backgroundImg from './assets/pz-logo.png';

export default function App() {
  return (
    <View style={styles.container}>
			<View style={styles.header}>
				<Header />
			</View>
			<View style={styles.body}>
				<Body />
			</View>
			<View style={styles.footer}>
				<Footer />
			</View>
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flex: 0.9,
	},
	body: {
    flex: 5,
		alignItems: 'center',
		backgroundColor: '#f5f5f5',
	},
	footer: {
		flex: 1.3,
		backgroundColor: '#f5f5f5',
	},
});

