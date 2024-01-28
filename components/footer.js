import {
	StyleSheet,
	View,
	Image,
	TouchableHighlight,
	Text,
} from 'react-native';
import React from 'react';
import EventButton from './footer/eventButton';
function Footer(props) {
	// const [isPress, setIsPress] = React.useState(false);
	function moveChess() { }
	function pass() { }
	function turnLeft() { }
	function turnRight() { }
	function seeChessPosition() { }

	return (
		<View style={styles.container}>
			<View style={styles.controllerBox}>
				<TouchableHighlight
					style={styles.controllerButton}
					onPress={turnLeft}
					underlayColor="#909090">
					<Image
						source={require('../assets/leftArrow.png')}
						style={styles.controllerImg}
					/>
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
				<EventButton
					text={'放置新棋'}
					eventFunction={props.setNewChess}
				/>
				<EventButton
					text={'移動棋子'}
					eventFunction={moveChess}
				/>
				<EventButton
					text={'PASS'}
					eventFunction={pass}
				/>
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
	},
	controllerBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: '20%',
	},
	eventButtonBox: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	controllerButton: {
		top: 5,
		height: 40,
		width: 40,
		borderRadius: '50%',
		// backgroundColor: '#BDBDBD',
	},
	controllerImg: {
		// height: '100%',
	},
});
