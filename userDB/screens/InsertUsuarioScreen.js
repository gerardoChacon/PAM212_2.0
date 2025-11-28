import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";

import { UsuarioController } from "../controllers/UsuarioController";

const controller = new UsuarioController();

export default function UsuarioView() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  // estados para editar
  const [editando, setEditando] = useState(null); // usuario que se está editando
  const [nuevoNombre, setNuevoNombre] = useState("");

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();

    controller.addListener(cargarUsuarios);
    return () => controller.removeListener(cargarUsuarios);
  }, [cargarUsuarios]);

  const handleAgregar = async () => {
    if (guardando) return;

    try {
      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert(
        "Usuario Creado",
        `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`
      );
      setNombre("");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setGuardando(false);
    }
  };

  const handleEliminar = async (id, nombreUsuario) => {
    Alert.alert("Confirmar eliminación", `¿Eliminar a "${nombreUsuario}"?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          try {
            await controller.eliminarUsuario(id);
          } catch (error) {
            Alert.alert("Error", error.message);
          }
        },
      },
    ]);
  };

  const handleGuardarEdicion = async () => {
    if (!editando) return;

    try {
      await controller.actualizarUsuario(editando.id, nuevoNombre);
      setEditando(null);
      setNuevoNombre("");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>

        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleDateString("es-MX", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>

        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <TouchableOpacity
            style={[styles.btnSmall, { backgroundColor: "#007AFF" }]}
            onPress={() => {
              setEditando(item);
              setNuevoNombre(item.nombre);
            }}
          >
            <Text style={styles.btnSmallText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnSmall, { backgroundColor: "red", marginLeft: 8 }]}
            onPress={() => handleEliminar(item.id, item.nombre)}
          >
            <Text style={styles.btnSmallText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderEditarModal = () => {
    if (!editando) return null;

    return (
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          <Text style={styles.sectionTitle}>Editar Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nuevo nombre"
            value={nuevoNombre}
            onChangeText={setNuevoNombre}
          />

          <TouchableOpacity
            style={[styles.addButton, { marginTop: 10 }]}
            onPress={handleGuardarEdicion}
          >
            <Text style={styles.addButtonText}>Guardar Cambios</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.addButton,
              { backgroundColor: "gray", marginTop: 10 },
            ]}
            onPress={() => {
              setEditando(null);
              setNuevoNombre("");
            }}
          >
            <Text style={styles.addButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* ======= TÍTULO PRINCIPAL ======= */}
      <Text style={styles.mainTitle}>INSERT, SELECT, UPDATE & DELETE</Text>
      <Text style={styles.subTitle}>iOS (SQLite)</Text>

      {/* ======= TARJETA INSERTAR USUARIO ======= */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Insertar Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAgregar}>
          <Text style={styles.addButtonText}>
            {guardando ? "Guardando..." : "Agregar Usuario"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* ======= LISTA DE USUARIOS ======= */}
      <View style={styles.listHeader}>
        <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

        <TouchableOpacity onPress={cargarUsuarios}>
          <Text style={styles.reloadText}>Recargar</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={{ marginTop: 20 }}
        />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUsuario}
          style={{ marginTop: 10 }}
        />
      )}

      {/* Modal de edición */}
      {renderEditarModal()}
    </View>
  );
}

// =================== ESTILOS ===================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 80 : 50,
    backgroundColor: "#F5F6FA",
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 4,
  },

  subTitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  /* Tarjeta */
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* Lista */
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  reloadText: {
    color: "#007AFF",
    fontWeight: "600",
  },

  userItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },

  userNumber: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  userNumberText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    fontSize: 18,
    fontWeight: "600",
  },

  userId: {
    color: "#555",
  },

  userDate: {
    color: "#888",
    marginTop: 4,
    fontStyle: "italic",
  },

  // botones pequeños para editar / eliminar
  btnSmall: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  btnSmallText: {
    color: "#fff",
    fontWeight: "600",
  },

  // modal de edición
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});
