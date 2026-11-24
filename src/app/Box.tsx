import { StyleSheet, Text, View } from 'react-native';

type BoxProps = {
	children: string;
	color: string;
}

export default function Box({ children, color }: BoxProps) {
	return (
		<View style={[styles.mainContainer, { backgroundColor: color }]}>
			<Text style={styles.txt}>{children}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		padding: 10,
		margin: 5,
	},
	txt: {
		color: 'white'
	}
})