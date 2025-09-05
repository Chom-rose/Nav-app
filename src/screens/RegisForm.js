import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/CustomButton";


const RegisForm = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", email: "", password: "", confirmPassword: "" });

    const handleChange = (field, value) => {
        switch (field) {
            case "username":
                setUsername(value);
                setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
                break;
            case "email":
                setEmail(value);
                setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                break;
            case "password":
                setPassword(value);
                setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
                break;
            case "confirmPassword":
                setConfirmPassword(value);
                setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
                break;
            default:
                break;
        }
    };

    const validateField = (field, value) => {
        let error = "";
        if (!value) {
            error = "This field is required";
        } else {
            if (field === "email" && !/\S/.test(value)) {
                error = "Invalid email address";
            } else if (field === "password" && value.length <2 ) {
                error = "Password must be at least 8 characters";
            } else if (field === "confirmPassword" && value !== password) {
                error = "Password do not match!";
            }
        }
        setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
        return error;
    };

    const checkSubmit = () => {
        const usernameError = validateField("username", username);
        const emailError = validateField("email", email);
        const passwordError = validateField("password", password);
        const confirmPasswordError = validateField("confirmPassword", confirmPassword);
        
        if (!usernameError && !emailError && !passwordError && !confirmPasswordError) {
            Alert.alert("Registration result: ", "SUCCESS!!!");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            console.log("Form submitted successfully!");
            
        }
        navigation.navigate("Cards")
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(value) => handleChange("username", value)}
            />
            {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(value) => handleChange("email", value)}
                onBlur={() => validateField("email", email)}
                keyboardType="email-address"
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(value) => handleChange("password", value)}
                onBlur={() => validateField("password", password)}
                secureTextEntry
            />
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={(value) => handleChange("confirmPassword", value)}
                onBlur={() => validateField("confirmPassword", confirmPassword)}
                secureTextEntry
            />
            {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}

            <CustomButton title="Register" backgroundColor="green" onPress={checkSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 5,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
});

export default RegisForm;