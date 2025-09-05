import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ title, content, image }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 15,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    content: {
        fontSize: 14,
        color: "#555",
        textAlign: "center",
    },
});

export default Card;