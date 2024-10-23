import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { BASE_URL } from "../config/api"; 

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [locationId, setLocationId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async({email,name,password,confirmPassword,username,role,navigation,setLoading,locationId})=>{
    const requestPayload = {
        employeeId:email,
        name,
        email,
        password,
        locationId,
        organizationId:locationId,
        payrollId:123,
        employeePayrollId:123,
        accessRole:{name:role},
        role:{name:role},
        picture:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        deleted_at:null
    };
console.log(requestPayload)
    const response = await axios.post(
        BASE_URL + "/addEmployee",
        requestPayload
    );
    if(response.status === 201){
        const {message, employee} = response.data;
        Alert.alert(message);
        navigation.navigate("LoginScreen");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={username}
        onChangeText={setUserName}
        keyboardType="name-phone-pad"
        autoCapitalize="none"
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <View style={styles.roleContainer}>
        <TouchableOpacity 
            style={isAdmin ? styles.adminButton : styles.adminButtonInactive}
            onPress={()=>setIsAdmin(true)}>
            <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity s
            style={!isAdmin ? styles.adminButton : styles.adminButtonInactive}
            onPress={()=>setIsAdmin(false)}>
            <Text style={styles.buttonText}>Regular</Text>
        </TouchableOpacity>
      </View>

        <TextInput
            style={styles.input}
            placeholder="Location Id"
            value={locationId}
            onChangeText={setLocationId}
            secureTextEntry
            autoCapitalize="none"
        />
      
      <TouchableOpacity
          style={styles.button}
          disabled={false}
          onPress={() => {
            handleSignUp({
              email,
              name:username,
              password,
              confirmPassword,
              username,
              role:isAdmin?"admin":"regular",
              navigation,
              setLoading,
              locationId,
            });
          }}
        >
          <Text style={styles.buttonText}>
            {loading && "Loading"}
            {!loading && "Sign Up"}
          </Text>
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  roleContainer: {
    display:"flex",
    flexDirection:"row",
    gap:15,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "#ff3479",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  adminButton: {
    backgroundColor: "#ff3479",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flex:1
  },
  adminButtonInactive: {
    backgroundColor: "#777777",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flex:1
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;