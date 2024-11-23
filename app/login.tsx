import { Image, View, StyleSheet, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from "react-native";
import { Link, useRouter } from "expo-router";
import { Inter_300Light, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold, useFonts } from "@expo-google-fonts/inter";
import { useState } from "react";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

    
    const [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_300Light,
        Inter_800ExtraBold,
        Inter_400Regular,
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
   };
      

    function userLogin() {
        if (!validateEmail(email)) {
            Alert.alert("Email inválido", "Por favor, insira um e-mail válido.");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Senha inválida", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Alert.alert("Login Efetuado", "Você foi autenticado com sucesso!");

                setEmail("");
                setPassword("");

                router.push("/cursos");
            })
            .catch((error) => {
                const errorMessage = error.message;
                Alert.alert("Erro de Login", errorMessage);
            });
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ImageBackground style={styles.back} source={require("../imagens/formacao.jpg")}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../imagens/acacia.png')}></Image>

                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#808080"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Senha"
                            placeholderTextColor="#808080"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            maxLength={20}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Image
                                source={
                                    showPassword
                                        ? require("../imagens/eye-open.png")
                                        : require("../imagens/eye-closed.png") 
                                }
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={userLogin}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={styles.box2}>
                        <Text style={styles.text2}>Ainda não tem uma conta?</Text>
                        <Link style={styles.link} href={"./cadastro"}>
                            Registre-se
                        </Link>
                    </View>

                    <View style={styles.box2}>
                        <Text style={styles.text2}>Esqueceu a senha?</Text>
                        <Link style={styles.link} href={"./recuperar"}>
                            Recuperar conta
                        </Link>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: 360,
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        gap: 20,
        marginTop: 30,
    },
    logo:{
        transform: [{ scale: 1.5 }],
    
    },
    input: {
        width: "100%",
        height: 50,
        fontSize: 18,
        paddingHorizontal: 15,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        fontFamily: "Inter_400Regular",
    },
    passwordContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    passwordInput: {
        flex: 1,
        height: 50,
        fontSize: 18,
        fontFamily: "Inter_400Regular",
    },
    eyeIcon: {
        width: 24,
        height: 24,
    },
    text: {
        fontSize: 36,
        color: "white",
        fontFamily: "Inter_800ExtraBold",
        marginBottom: 20,
    },
    back: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box2: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        marginTop: 10,
    },
    link: {
        color: "#1e90ff",
        fontFamily: "Inter_800ExtraBold",
    },
    text2: {
        color: "#808080",
        fontFamily: "Inter_600SemiBold",
    },
    loginButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#1e90ff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    loginButtonText: {
        color: "white",
        fontSize: 18,
        fontFamily: "Inter_600SemiBold",
    },
});
