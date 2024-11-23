import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import { router } from "expo-router";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!validateEmail(email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return;
    }

    setIsLoading(true);
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email.trim());
      if (signInMethods.length === 0) {
        Alert.alert("Erro", "Este e-mail não está cadastrado.");
        return;
      }

      if (signInMethods.includes("password")) {
        await sendPasswordResetEmail(auth, email.trim());
        Alert.alert("Sucesso", "E-mail de recuperação enviado!");
        router.replace("/login");
      } else {
        Alert.alert("Erro", "Este e-mail está associado a outro método de login (ex: Google).");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocorreu um erro inesperado. Por favor, tente novamente.";
      Alert.alert("Erro", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={[styles.button, isLoading ? styles.buttonDisabled : styles.buttonEnabled]}
        onPress={handlePasswordReset}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>{isLoading ? "Enviando..." : "Enviar E-mail"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/login")}>
        <Text style={styles.backButtonText}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    width: "90%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonEnabled: {
    backgroundColor: "#4169e1",
  },
  buttonDisabled: {
    backgroundColor: "#B0C4DE",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    color: "#4169e1",
    fontSize: 16,
  },
});
