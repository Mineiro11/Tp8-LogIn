import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const manejarContacto = () => {
    Alert.alert('Mensaje enviado', usuario || 'No escribiste nada');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/porpantalla.webp')} 
        resizeMode="cover"
        style={styles.background}
      >
        <StatusBar style="auto" />

    

        <View style={styles.card}>
          <View style={styles.perfilContainer}>
            <Image
              source={require('./assets/uwu.webp')}
              resizeMode="cover"
              style={styles.perfil}
            />
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Usuario"
            value={usuario}
            onChangeText={setUsuario}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry
          />

          <TouchableOpacity style={styles.boton} onPress={manejarContacto}>
            <Text style={styles.botonTexto}>LogIn</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Olvidaste tu contraseña</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImageContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#b5bac9',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: '#1a1110',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  boton: {
    height: 40,
    width: 250,
    backgroundColor: '#008000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  perfilContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#1a1110',
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 10,
  },
  perfil: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 10,
    color: '#333',
  },
});
