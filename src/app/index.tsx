import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from "./Box";

export default function Index() {
	return (
		<SafeAreaView style={styles.mainContainer}>

			<Text style={styles.txt}>Hello world!</Text>

			<View style={styles.flexContainer}>
				<Box color="red">red box</Box>
				<Box color="green">green box</Box>
				<Box color="blue">blue box</Box>
			</View>

		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 10
	},
	txt: {
		textAlign: 'center',
		padding: 25
	},
	flexContainer: {
		flex: 1,
		backgroundColor: 'lightblue',
		padding: 20,
		flexDirection: 'row-reverse',
		flexWrap: 'wrap', 
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});
