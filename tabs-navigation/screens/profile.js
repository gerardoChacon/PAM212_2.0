import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Perfil de Usuario</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Detail")}
        >
          <Text style={styles.buttonText}>Detalle De Usuario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconRow: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    color: "green",
  },
  button: {
    backgroundColor: "blue",
    marginTop: 15,
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
  },
});
