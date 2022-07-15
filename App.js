import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const ALL4U = "https://www.all4u.market/";
const WORLDMIRAL = "https://worldmiral.com";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        <WebView source={{ uri: ALL4U }} onLoad={console.log("loaded")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
