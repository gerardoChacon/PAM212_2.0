import { View, Text, StyleSheet } from "react-native";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Detalles Usuario</Text>
      <Text style={styles.text2}> Usando Navigation Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 24,
  },
  text2: {
    fontSize: 18,
    color: "blue",
  },
});
