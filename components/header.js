import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

function Header(value) {
	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<Image
					source={require('../assets/default.png')}
					style={styles.avatar}
				/>
				<Text style={styles.name}>name</Text>
			</View>
		</View>
	);
}

export default Header;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#BDBDBD',
		flex: 1,
		flexDirection: 'column-reverse',
	},
	box: {
		left: 14,
		top: 14,
		flexDirection: 'row',
		alignItems: 'center',
	},
	name: {
		left: 10,
	},
});
