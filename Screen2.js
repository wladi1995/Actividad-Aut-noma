import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,Button} from 'react-native';

const Screen2 = () => {
  const [num1,setNum1]= useState(0);
const [num2,setNum2]= useState(0);
const [result,setResult]= useState(0);
const metDiv=()=>{
  if(num1!=0 & num2 !=0){
    const resultado=parseFloat(num1)/parseFloat(num2);
    setResult(`Resultado: ${resultado}`);    
  }
 if(num1==0 & num2==0){
  setResult(`INDETERMINACION`); 
 }
 if(num1!=0 & num2==0){
  setResult(`NO EXISTE DIVISION PARA CERO`); 
 }
}
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inserte el primer Numero</Text>
      <TextInput style={StyleSheet.input}
        placeholder="Ingrese el primer numero"
        keyboardType='numeric'
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <Text>Inserte el segundo Numero</Text>
      <TextInput style={StyleSheet.input}
        placeholder="Ingrese el segundo Numero"
        keyboardType='numeric'
        value={num2}
        onChangeText={(text) => setNum2(text)}
        />
        <Button title='Dividir' onPress={metDiv} />
         <Text> {result} </Text>
              
    </View>
  );

};



export default Screen2;

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 8,
    },
  });