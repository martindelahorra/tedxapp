import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import forgot from "./forgotPassword";

export default function LoginScreen() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorContraseña, setErrorContraseña] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    setErrorCorreo("");
    setErrorContraseña("");
    setLoading(true);

    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario logueado con éxito:", user.email);
        // Simular el tiempo de espera de 2 segundos
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Home'); // Cambia 'Home' por el nombre correcto de tu pantalla principal
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        if (error.code === 'auth/invalid-email') {
          setErrorCorreo("Correo no válido.");
        } else if (error.code === 'auth/user-not-found') {
          setErrorCorreo("Usuario no encontrado.");
        } else if (error.code === 'auth/wrong-password') {
          setErrorContraseña("Contraseña incorrecta.");
        } else if (error.code === 'auth/invalid-credential') {
          setErrorContraseña("Credenciales no validas.");

        } else {
          setErrorContraseña(error.message);
        }
      });
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword'); // Cambia 'RecoverPassword' por el nombre correcto de tu pantalla de recuperación
  };

  return (
    <View style={styles.centered}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#d51523" />
          <Text style={styles.loadingText}>Iniciando sesión...</Text>
        </View>
      )}
      <Text style={{ margin: 10, maxWidth: 400, color: "white" }}>
        Ingresa tus datos:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Correo*"
        placeholderTextColor="white"
        onChangeText={setCorreo}
      />
      {errorCorreo ? <Text style={styles.errorText}>{errorCorreo}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Contraseña*"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={setContraseña}
      />
      {errorContraseña ? <Text style={styles.errorText}>{errorContraseña}</Text> : null}
      <Button
        title="Iniciar Sesión"
        color="#d51523"
        onPress={handleLogin}
      />
      <Button
        title="Olvidé mi contraseña"
        color="#d51523"
        onPress={handleForgotPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212", // Fondo oscuro para contraste
  },
  input: {
    margin: 10,
    width: 320,
    height: 50,
    padding: 10,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  loadingText: {
    color: "white",
    marginTop: 10,
    fontSize: 18,
  },
});
