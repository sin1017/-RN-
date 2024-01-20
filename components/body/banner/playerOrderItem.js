import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

function playerOrderItem(props) {
	return (
		<View style={props.focus ? styles.focusOpen : styles.focusClose}>
			<Text>{props.text}</Text>
		</View>
	);
}

export default playerOrderItem;

const styles = StyleSheet.create({
	focusClose: {
		backgroundColor: '#BDBDBD',
		height: 29,
		width: 29,
		borderRadius: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	focusOpen: {
		backgroundColor: '#ABE58F',
		height: 29,
		width: 29,
		borderRadius: '50%',
		borderRadius: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
