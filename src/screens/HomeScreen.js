import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomButton from "../components/CustomButton.js";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.TextStyle}>Welcome to my Screen</Text>
        <View>
            <Button
                title="Go to use State Demo"
                onPress={() => navigation.navigate("State")}
                color="#3a0751"
            />
            <Button
                title="Go to List Screen"
                onPress={() => navigation.navigate("List")}
                color="#f2c85b"
            />
            <Button
                title="Go to Swipe Demo"
                onPress={() => navigation.navigate("Swipe")}
                color="#fba465"
            />
            <Button
                title="Go to Modal Demo"
                onPress={() => navigation.navigate("Modal")}
                color="#f86e61"
            />
            <CustomButton 
                title="CardScreen"
                onPress={() => navigation.navigate("Cards")}
                backgroundColor="red"
            />
            <Button
                title="ZZZ"
                onPress={() => navigation.navigate("Hero")}
                color="purple"
            />
             <Button
                title="Call State"
                onPress={() => navigation.navigate("State")}
                color="gray"
            />
            <CustomButton 
                title="Regis"
                onPress={() => navigation.navigate("regis")}
                backgroundColor="red"
            />
           </View>
            </View>
    );
};

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffc7ba",
        padding: 10,
    },
    TextStyle: {
        fontSize: 30,
    },
});

export default HomeScreen;