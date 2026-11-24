import { StyleSheet, Text, View } from "react-native";
import Box from "./Box";

export default function Index() {
	return (
		// een main View met Flex:1 pakt alle ruimte en houdt geen rekening met camera of status bar van je telefoon
		// Gebruik SafeAreaView van 'react-native-safe-area-context' om to op te lossen.
		<View style={styles.mainContainer}>

			<Text style={styles.txt}>Hello world!</Text>
			
			{/* Alles is een flex container dus kunnen we flexbox layout toepassen */}
			<View>
				<Box></Box>
				<Box></Box>
				<Box></Box>
			</View>
			
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	txt: {
		textAlign: 'center',
		// padding: 25
	},
});
