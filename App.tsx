import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import ErrorBoundary from 'react-native-error-boundary';
import MinView from './View/view';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store,persistor } from './redux/store';
// const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<MinView/>
				</PersistGate>
			</Provider>
		</ErrorBoundary>
  );
}
