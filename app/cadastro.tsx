import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground ,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Inter_300Light, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold, useFonts } from "@expo-google-fonts/inter";
import {router} from "expo-router"

const senhaForteRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{10,}$/;

export default function CadastroScreen() {


  function telaLogin(){
    router.replace('/login');
  }


  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_300Light,
    Inter_800ExtraBold,
    Inter_400Regular,
    });

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    if (!senhaForteRegex.test(senha)) {
      Alert.alert(
        "Erro",
        "A senha deve conter pelo menos 10 caracteres, incluindo uma letra maiúscula, um símbolo e um número."
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      
      
      
      Alert.alert("Cadastro realizado com sucesso!");
      
      
      setNome('');
      setEmail('');
      setTelefone('');
      setSenha('');

      navigation.goBack();

    } catch (error) {
      Alert.alert("Erro ao cadastrar", error.message);
    }
  };

  const handleCancelar = () => {
    navigation.goBack();
  };

  return (
  <ImageBackground style={styles.back} source={require('../imagens/formacao.jpg')}>
   <View style={styles.box}>
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        placeholderTextColor="white"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cadastrarButton]} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelarButton]} onPress={telaLogin}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>

    </View>
  </View>
</ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    width: 330,
    
  },
  title: {
    fontSize: 27,
    fontFamily:'Inter_800ExtraBold',
    marginBottom: 20,
    textAlign: 'center',
    color:'white',
    
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    
  },
  back: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 360,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    gap: 20,
    justifyContent: 'center',
    height: 500,
    
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    
  },

  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cadastrarButton: {
    backgroundColor: '#4169e1',
  },

  cancelarButton: {
    backgroundColor: '#F44336',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  
});
