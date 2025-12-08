import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const ARTICLES = {
  Deportes: [
    {
      id: 1,
      title: "CR7 a por los 1000 goles",
      date: "25/12/08",
      summary:
        "Cristiano Ronaldo a los 41 años sigue marcando y está más cerca que nunca de conseguir los mil goles, ¿Lo logrará antes del retiro?",
      image: `data:image/jpeg;base64,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,`,
    },
    {
      id: 2,
      title: "Real Madrid tira la liga",
      date: "25/11/08",
      summary:
        "RMA pierde en casa contra el Celta, expulsaron a Carreras, F. García y Endrick, además Miliato se lesionó de nuevo, continúan las bajas y el Barcelona ya tiene 4 puntos más",
      image: "url aquí",
    },
  ],
  Nacional: [
    {
      id: 3,
      title: "Título",
      date: "Hoy",
      summary: "Noticia ...",
      image: "url aquí",
    },

    {
      id: 4,
      title: "Título",
      date: "Hoy",
      summary: "Noticia ...",
      image: "url aquí",
    },
  ],
  Entretenimiento: [
    {
      id: 5,
      title: "Título",
      date: "Hoy",
      summary: "Noticia ...",
      image: "url aquí",
    },
    {
      id: 6,
      title: "Título",
      date: "Hoy",
      summary: "Noticia ...",
      image: "url aquí",
    },
  ],
};

//Tarjeta
function ArticleCard({ article, onReadMore }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: article.image }} />
      <Text>{article.title}</Text>
      <Text>{article.date}</Text>
      <Text>{article.summary}</Text>

      <TouchableOpacity onPress={() => onReadMore(article)}>
        <Text>Leer más.</Text>
      </TouchableOpacity>
    </View>
  );
}

//Sección
function Section({ title, articles, onReadMore }) {
  return (
    <View style={styles.section}>
      <Text>{title}</Text>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onReadMore={onReadMore}
        ></ArticleCard>
      ))}
    </View>
  );
}

export default function App() {
  const handleReadMore = (article) => {
    Alert.alert(
      article.title,
      "Qué deseas hacer con está noticia?",
      [
        { text: "Compartir", onPress: () => console.log("Compartir") },
        { text: "Guardar", onPress: () => console.log("Guardar") },
        { text: "Canelar", onPress: () => console.log("Canelar") },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mi portal de noticias</Text>
      </View>

      <ScrollView style={styles.scrollContent}>
        <Section
          title="Deportes"
          articles={ARTICLES.Deportes}
          onReadMore={handleReadMore}
        />
        <Section
          title="Nacional"
          articles={ARTICLES.Nacional}
          onReadMore={handleReadMore}
        />
        <Section
          title="Entretenimiento"
          articles={ARTICLES.Entretenimiento}
          onReadMore={handleReadMore}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 0,
    margin: 0,
  },
  header: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(244, 10, 10)",
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 3, // sombreado Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  section: {
    marginBottom: 24,
  },
});
