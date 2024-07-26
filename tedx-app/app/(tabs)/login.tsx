import react from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.centered}>
      <Text
        style={{
          margin: 10,
          maxWidth: 400,
          color: "white",
        }}
      >
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
        placeholder="Correo*"
        placeholderTextColor="white"
        onChangeText={(text) => (usuarioLogin.correo = text)}
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
        onChangeText={(text) => (usuarioLogin.contraseña = text)}
      />
      <Button
        title="Iniciar Sesion"
        color="#d51523"
        onPress={() => console.log(usuarioLogin)}
      />
    </View>
  );
}

const usuarioLogin = {
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
