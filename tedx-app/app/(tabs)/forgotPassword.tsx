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
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function RecoverPasswordScreen() {
  const [correo, setCorreo] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const handleRecoverPassword = () => {
    setErrorCorreo("");
    setLoading(false);
    setMessage("");

    // Validación de campo vacío
    if (!correo) {
      setErrorCorreo("El campo de correo no puede estar vacío.");
      return;
    }

    // Validación de formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setErrorCorreo("Correo no válido.");
      return;
    }

    setLoading(true);

    sendPasswordResetEmail(auth, correo)
      .then(() => {
        setMessage("Correo de recuperación enviado.");
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Iniciar Sesion');
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === 'auth/invalid-email') {
          setErrorCorreo("Correo no válido.");
        } else if (error.code === 'auth/user-not-found') {
          setErrorCorreo("Usuario no encontrado.");
        } else {
          setErrorCorreo(error.message);
        }
      });
  };

  return (
    <View style={styles.centered}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#d51523" />
          <Text style={styles.loadingText}>{message || "Enviando correo de recuperación..."}</Text>
        </View>
      )}
      <Text style={{ margin: 10, maxWidth: 400, color: "white" }}>
        Ingresa tu correo para recuperar tu contraseña
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Correo*"
        placeholderTextColor="white"
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errorCorreo ? <Text style={styles.errorText}>{errorCorreo}</Text> : null}
      <Button
        title="Recuperar contraseña"
        color="#d51523"
        onPress={handleRecoverPassword}
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
