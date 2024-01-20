import { StyleSheet, View } from 'react-native';
import React from 'react';
import PlayerOrderItem from './banner/playerOrderItem';
import PlayerBox from './banner/playerBox';
import ActivePlayer from './banner/activePlayers';

function playerOrderList(props) {
	const [isPress] = React.useState(false);
	const playerOrderItemList = [
		{
			text: 'R1',
			focus: true
		},
		{
			text: 'R2',
			focus: false
		},
		{
			text: 'R3',
			focus: false
		},
		{
			text: 'R4',
			focus: false
		},
	];
	const playerBoxList = [
		{
			name: 'player2',
			score: '1,023',
			color: '#FFF495'
		},
		{
			name: 'player3',
			score: '1,023',
			color: '#CAFFB0'
		},
		{
			name: 'player4',
			score: '1,023',
			color: '#A6FAFF'
		}
	]
	const activePlayer = {
		name: 'player1',
		chessList: [
			{
				id: 1,
				url: 'r1'
			},
			{
				id: 2,
				url: 'r2'
			},
			{
				id: 3,
				url: 'r1'
			}
		],
		avatarColor: '#FF9C9C'
	}

	return (
		<View style={styles.container}>
			<View style={styles.playerOrderList}>
				{
					playerOrderItemList.map((item) =>
						(<PlayerOrderItem text={item.text} focus={item.focus} key={item.text} />)
					)
				}
			</View>
			<View style={styles.playerBoxList}>
				{
					playerBoxList.map((item) => (
						<PlayerBox name={item.name} score={item.score} color={item.color} key={item.name} />
					))
				}
			</View>
			<View>
				<ActivePlayer name={activePlayer.name} avatarColor={activePlayer.avatarColor} chessList={activePlayer.chessList} />
			</View>
		</View>
	);
}

export default playerOrderList;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	playerOrderList: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 5,
		backgroundColor: '#FFFFFF',
		height: 35,
		width: 230,
		borderRadius: '50%',
		marginTop: 30,
	},
	playerBoxList: {
		marginTop: 15,
		marginBottom: 20,
		flexDirection: 'row',
		width: 350,
		justifyContent: 'space-between'
	}
});
