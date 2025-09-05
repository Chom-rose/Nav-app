import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress, backgroundColor }) => {
    return (
        <TouchableOpacity  
        style={[styles.button, { backgroundColor }]}
        onPress={onPress}
        >
            <Text style={styles.text}>{ title }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
 button: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
 },
 text: {
    color: "white",
    fontSize: 18,
    fontWeight: 4,
 },

})
export default CustomButton;