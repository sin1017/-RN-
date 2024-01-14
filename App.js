import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/header';
import Footer from './component/footer';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Header />
			</View>
			<View style={styles.body}></View>
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
		flex: 1,
	},
	body: {
		flex: 5,
		alignItems: 'center',
		backgroundColor: 'green',
	},
	footer: {
		flex: 1.5,
		backgroundColor: '#BDBDBD',
	},
});
