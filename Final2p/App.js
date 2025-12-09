import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image, SplashScreen } from "react-native";
import { ScrollView } from "react-native-web";

const CIUDADES = [
  {
    Queretaro: {
      id: 1,
      icono: "🌧️",
      temperatura: 18,
      descripcion: "Nublado",
    },
    Monterrey: {
      id: 2,
      icono: "🌧️",
      temperatura: 18,
      descripcion: "Nublado",
    },
    Guadalajara: {
      id: 3,
      icono: "🌧️",
      temperatura: 18,
      descripcion: "Nublado",
    },
    CDMX: {
      id: 4,
      icono: "🌧️",
      temperatura: 18,
      descripcion: "Nublado",
    },
  },
];

function Card({ ciudad, icono, temperatura, descripcion, verDetalles }) {
  return (
    <View style={styles.card}>
      <Text>Clima Actual</Text>
      <Text>{ciudad}</Text>
      <Text>{temperatura}</Text>
      <Text>{icono}</Text>
      <Text>{descripcion}</Text>
      <TouchableOpacity onPress={verDetalles}>
        <Text>Ver Más</Text>
      </TouchableOpacity>
    </View>
  );
}

function Section({ ciudades, onVerDetalles }) {
  <View>
    <Text>Clima Actual</Text>
    {ciudades.map((ciudad) => {
      <Card
        key={ciudad.id}
        ciudad={ciudad.ciudad}
        temperatura={ciudad.temperatura}
        icono={ciudad.icono}
        descripcion={ciudad.descripcion}
        verDetalles={onVerDetalles}
      />;
    })}
  </View>;
}

export default function App() {
  const verDetallesAlert = () => {
    Alert.alert("Querétaro, Humedad: 53%s");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>WeatherUPQ</Text>
      </View>
      <ScrollView>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
        <Card verDetalles={verDetallesAlert}></Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  header: {
    backgroundColor: "#ff0000",
    width: "100%",
    alignItems: "center",
    padding: 50,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 32,
  },

  scrollContent: {
    paddingHorizontal: 16,
  },
  card: {
    padding: 30,
    margin: 15,
    width: 330,
    borderRadius: 15,
    shadowRadius: 15,
    backgroundColor: "#f4f4f4",
    justifyContent: "space-between",
  },
});
