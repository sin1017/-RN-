import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
} from 'react-native';

function Footer() {
	function setNewChess() {}
	function moveChess() {}
	function pass() {}
	function turnLeft() {}
	function turnRight() {}
	function seeChessPosition() {}

	return (
		<View style={styles.container}>
			<View style={styles.controllerBox}>
				<TouchableHighlight
					style={styles.controllerButton}
					onPress={turnLeft}
					underlayColor="#909090">
					<Image source={require('../assets/leftArrow.png')} />
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.controllerButton}
					onPress={seeChessPosition}
					underlayColor="#909090">
					<Image source={require('../assets/eyesBtn.png')} />
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.controllerButton}
					onPress={turnRight}
					underlayColor="#909090">
					<Image source={require('../assets/rightArrow.png')} />
				</TouchableHighlight>
			</View>
			<View style={styles.eventButtonBox}>
				<TouchableHighlight
					onPress={setNewChess}
					style={styles.buttonStyle}
					underlayColor="#909090">
					<Text>放置新棋</Text>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={moveChess}
					style={styles.buttonStyle}
					underlayColor="#909090">
					<Text>移動棋子</Text>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={pass}
					style={styles.buttonStyle}
					underlayColor="#909090">
					<Text>PASS</Text>
				</TouchableHighlight>
			</View>
		</View>
	);
}

export default Footer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: [0, 13, 34, 14],
		paddingBottom: 34,
		paddingHorizontal: 14,
		backgroundColor: 'black',
	},
	controllerBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: '20%',
	},
	controllerButton: {
		top: 5,
		height: '60%',
		borderRadius: '50%',
		backgroundColor: '#BDBDBD',
	},
	eventButtonBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonStyle: {
		backgroundColor: '#BDBDBD',
		height: '50%',
		width: '25%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 2,
	},
});
