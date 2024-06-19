import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Importa LinearGradient
import { FontAwesome } from "@expo/vector-icons"; // Importa FontAwesome

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Define los colores del gradiente en orden invertido
        colors={["rgba(0,212,255,1)", "rgba(9,9,121,1)"]}
        // Define las posiciones de inicio y fin del gradiente
        locations={[0.05, 0.89]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.contentContainer}
      >
        <LinearGradient
          colors={["rgba(214,142,14,1)", "rgba(255,210,0,1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.ovalContainer}
        >
          <Image
            source={require("../../assets/images/edulexia_logo.png")} // Ruta de tu imagen
            style={styles.image}
          />
        </LinearGradient>
      </LinearGradient>
      {/* Botón de Play */}
      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={["rgba(214,142,14,1)", "rgba(255,210,0,1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.button}
        >
          <FontAwesome name="play" size={32} color="white" />
        </LinearGradient>
      </TouchableOpacity>
      {/* Botón de Configuración */}
      <TouchableOpacity style={styles.settingsButton}>
        <FontAwesome name="cog" size={70} color="black" />
      </TouchableOpacity>
      {/* Botón de Usuario */}
      <TouchableOpacity style={styles.userButton}>
        <FontAwesome name="user" size={70} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  ovalContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    height: 210,
    borderRadius: 120,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000",
  },
  image: {
    width: 480,
    height: 130,
    borderRadius: 0, // Ajusta el borde de la imagen según tus necesidades
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50, // Ajusta la posición del botón con respecto al óvalo
    zIndex: 1, // Para que el botón esté encima del ovalContainer
  },
  button: {
    left: 380,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
  settingsButton: {
    position: "absolute",
    top: 50, // Ajusta la posición del botón de configuración desde la parte superior
    left: 20, // Ajusta la posición del botón de configuración desde la izquierda
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 25,
  },
  userButton: {
    position: "absolute",
    top: 50, // Ajusta la posición del botón de usuario desde la parte superior
    right: 20, // Ajusta la posición del botón de usuario desde la derecha
    width: 100, // Ancho del botón más grande
    height: 100, // Altura del botón más grande
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30, // Radio del borde para hacer el botón circular
  },
});
