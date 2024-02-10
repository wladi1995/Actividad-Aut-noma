import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={require('./assets/dos.jpeg')} // Asegúrate de tener la imagen en la carpeta assets
        style={styles.image}
      />
      <Button
        title="Acceder"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  image: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },
});

export default Screen1;
