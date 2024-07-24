import react from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.centered}>
      <Text style={{ margin: 10, maxWidth: 400, color: "white" }}>
        Ingresa tus datos:
      </Text>
      <TextInput
        style={{
          margin: 10,
          width: 320,
          height: 50,
          padding: 10,
          color: "white",
          borderColor: "white",
          borderWidth: 1,
        }}
        placeholder="Nombre*"
        placeholderTextColor="white"
        onChangeText={(text) => (usuarioRegister.nombre = text)}
      />
      <TextInput
        style={{
          margin: 10,
          width: 320,
          height: 50,
          padding: 10,
          color: "white",
          borderColor: "white",
          borderWidth: 1,
        }}
        placeholder="Apellido*"
        placeholderTextColor="white"
        onChangeText={(text) => (usuarioRegister.apellido = text)}
      />
      <TextInput
        style={{
          margin: 10,
          width: 320,
          height: 50,
          padding: 10,
          color: "white",
          borderColor: "white",
          borderWidth: 1,
        }}
        placeholder="Correo*"
        placeholderTextColor="white"
        onChangeText={(text) => (usuarioRegister.correo = text)}
      />
      <TextInput
        style={{
          margin: 10,
          width: 320,
          height: 50,
          padding: 10,
          color: "white",
          borderColor: "white",
          borderWidth: 1,
        }}
        placeholder="Contraseña*"
        placeholderTextColor="white"
        secureTextEntry={true}
        onChangeText={(text) => (usuarioRegister.contraseña = text)}
      />
      <TextInput
        style={{
          margin: 10,
          width: 320,
          height: 50,
          padding: 10,
          color: "white",
          borderColor: "white",
          borderWidth: 1,
        }}
        placeholder="Confirmar Contraseña*"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      <Button
        title="Registrarse"
        color="#d51523"
        onPress={() => console.log(usuarioRegister)}
      />
    </View>
  );
}

const usuarioRegister = {
  nombre: "",
  apellido: "",
  correo: "",
  contraseña: "",
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
