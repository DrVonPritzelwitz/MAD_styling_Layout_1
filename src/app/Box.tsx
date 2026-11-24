import { StyleSheet, Text, View } from 'react-native';

export default function Box() {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.txt}>I'm a simple white box</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: 10,
		margin: 5,
	},
	txt: {
		// color: 'white'
	}
})