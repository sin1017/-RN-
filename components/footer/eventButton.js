import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import React from 'react';

function eventButton(props) {
	const [isPress, setIsPress] = React.useState(false);
	const buttonStyle = {
		onPress: props.eventFunction,
		style: styles.buttonStyle,
		onHideUnderlay: () => setIsPress(false),
		onShowUnderlay: () => setIsPress(true),
		underlayColor: '#909090',
	};
	return (
		<View style={styles.eventButtonBox}>
			<TouchableHighlight {...buttonStyle}>
				<Text style={isPress ? styles.text : ''}>{props.text}</Text>
			</TouchableHighlight>
		</View>
	);
}

export default eventButton;

const styles = StyleSheet.create({
	buttonStyle: {
		backgroundColor: '#BDBDBD',
		height: '80%',
		width: 90,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	text: {
		color: '#ffff',
	},
});
