import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useAppState } from "../state-management/hooks/useAppState";
import { BASE_URL } from "../config/api"; 
import { Actions } from "../state-management/Actions";

const LoginScreen = () => {
  const { dispatch } = useAppState();
  const [email, setEmail] = useState("abc@d.com");
  const [password, setPassword] = useState("abc1234");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        const { token, employee, employees } = response.data;
        dispatch({ type: Actions.INIT_USER, payload: {token , employee, employees} });
      } else {
        Alert.alert(
          "Login Failed",
          "Please check your credentials and try again"
        );
      }
    } catch (error) {
      Alert.alert("Login Failed", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity
        disabled={loading}
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          {loading && "Loading"}
          {!loading && "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={loading}
        style={styles.signUp}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff0057",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUp: {
    marginTop: 16,
    alignItems: "center",
  },
  signUpText: {
    color: "#ff3479",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;