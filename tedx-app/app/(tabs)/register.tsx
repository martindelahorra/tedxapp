import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { auth, db } from '../../firebaseConfig'; // Asegúrate de que la ruta sea correcta y de haber configurado Firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { doc, setDoc } from "firebase/firestore"; // Importa las funciones necesarias de Firestore

export default function RegisterScreen() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorApellido, setErrorApellido] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorContraseña, setErrorContraseña] = useState("");
  const [errorConfirmarContraseña, setErrorConfirmarContraseña] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleRegister = () => {
    let valid = true;

    // Reset errors
    setErrorNombre("");
    setErrorApellido("");
    setErrorCorreo("");
    setErrorContraseña("");
    setErrorConfirmarContraseña("");

    // Validations
    if (!nombre) {
      setErrorNombre("El nombre es obligatorio.");
      valid = false;
    }
    if (!apellido) {
      setErrorApellido("El apellido es obligatorio.");
      valid = false;
    }
    if (!correo) {
      setErrorCorreo("El correo es obligatorio.");
      valid = false;
    }
    if (!contraseña) {
      setErrorContraseña("La contraseña es obligatoria.");
      valid = false;
    }
    if (contraseña !== confirmarContraseña) {
      setErrorConfirmarContraseña("Las contraseñas no coinciden.");
      valid = false;
    }

    if (valid) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, correo, contraseña)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log("Usuario registrado con éxito:", user.email);
          
          // Guarda los datos adicionales en Firestore
          await setDoc(doc(db, "Login", user.uid), {
            name: nombre,
            lastName: apellido,
            email: correo
          });

          // Simular el tiempo de espera de 2 segundos
          setTimeout(() => {
            setLoading(false);
            navigation.navigate('Iniciar Sesion'); // Nombre de la pantalla en el Drawer
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          if (error.code === 'auth/invalid-email') {
            setErrorCorreo("Correo no válido.");
          } else if (error.code === 'auth/email-already-in-use') {
            setErrorCorreo("Correo ya registrado.");
          } else if (error.code === 'auth/weak-password') {
            setErrorContraseña("La contraseña es muy débil.");
          } else {
            setErrorContraseña(error.message);
          }
        });
    }
  };

  return (
    <View style={styles.centered}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#d51523" />
          <Text style={styles.loadingText}>Registrando...</Text>
        </View>
      )}
      <Text style={{ margin: 10, maxWidth: 400, color: "white" }}>
        Ingresa tus datos:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre*"
        placeholderTextColor="white"
        onChangeText={(text) => setNombre(text)}
      />
      {errorNombre ? <Text style={styles.errorText}>{errorNombre}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Apellido*"
        placeholderTextColor="white"
        onChangeText={(text) => setApellido(text)}
      />
      {errorApellido ? <Text style={styles.errorText}>{errorApellido}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Correo*"
        placeholderTextColor="white"
        onChangeText={(text) => setCorreo(text)}
      />
      {errorCorreo ? <Text style={styles.errorText}>{errorCorreo}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Contraseña*"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={(text) => setContraseña(text)}
      />
      {errorContraseña ? <Text style={styles.errorText}>{errorContraseña}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña*"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmarContraseña(text)}
      />
      {errorConfirmarContraseña ? <Text style={styles.errorText}>{errorConfirmarContraseña}</Text> : null}
      <Button
        title="Registrarse"
        color="#d51523"
        onPress={handleRegister}
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
