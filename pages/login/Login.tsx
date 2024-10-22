import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { useAuth } from "./AuthProvider";

interface LoginProps {
    navigation: any;
}
const Login = ({ navigation }: LoginProps) => {
    const { setAuthData } = useAuth();
    const [email, setEmail] = useState("aimalaemi@gmail.com");
    const [password, setPassword] = useState("abc1234");

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Please enter both email and password.');
            return;
        }

        try {
            const response = await fetch('http://192.168.18.47:5001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setAuthData(data.token, data.employees);

                console.log(data.employees);

                navigation.navigate('Home');
            } else {
                Alert.alert(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            Alert.alert('An error occurred. Please try again.');
            console.error(error);
        }
    };
    return (
        <View style={{ display: "flex", justifyContent: "center", height: '100%', backgroundColor: "#fafafa", padding: 20 }}>
            <Text style={{ fontSize: 30, textAlign: "center", fontWeight: 600, marginBottom: 50 }}>Login</Text>
            <Text>Email</Text>
            <TextInput value={email} onChangeText={setEmail}
                style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#ccc", padding: 5, paddingHorizontal: 15, borderRadius: 8, marginTop: 10, marginBottom: 15 }} />
            <Text>Password</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry
                style={{ borderStyle: "solid", borderWidth: 1, borderColor: "#ccc", padding: 5, paddingHorizontal: 15, borderRadius: 8, marginTop: 10, marginBottom: 15 }} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

export default Login;