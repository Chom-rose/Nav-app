import React, { useState, useEffect } from "react";
import { View, 
    StyleSheet, 
    Text, 
    TextInput, 
    FlatList, 
    Alert, 
    TouchableOpacity } from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
// import Icon from "react-native-vector-icons/Icon";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@cards_data"

const CardScreen = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [cards, setCards] = useState("");

useEffect(() => {
    loadCards();
}, []);

useEffect(() => {
    saveCards();
}, [cards]);

const addCard = async () => {
    if (!title.trim() || !content.trim() || !image.trim()) {
        Alert.alert("ข้อผิดพลาด", "กรุณากรอกหัวข้อ เนื้อหา และ URL ของรูปภาพ");
        return;
    }

    const newCard = { id: Date.now().toString(), title, content, image };
    const updateCard = [newCard, ...cards];
    setCards(updateCard);
    setTitle("");
    setContent("");
    setImage("");

    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updateCard));
    } catch (error) {
        console.error('Error saving cards:', error);
    }
};


    const deleteCard = (id) => {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
    };

    const saveCards = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
        } catch (error) {
            console.error("Error saving cards:", error);
        }
    };
    
    const loadCards = async () => {
        try {
            const storedCards = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedCards !== null) {
            setCards(JSON.parse(storedCards));
            }
        } catch(error) {
            console.error('Failed to lode:', error)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>ทดสอบสร้างการ์ด</Text>
            
            <TextInput
                style={styles.input}
                placeholder="ใส่หัวข้อ . ."
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            
            <TextInput
                style={styles.input}
                placeholder="ใส่เนื้อหา . ."
                value={content}
                onChangeText={(text) => setContent(text)}
                multiline={true}
                numberOfLines={5}
            />
            
            <TextInput
                style={styles.input}
                placeholder="ใส่ URL รูปภาพ . ."
                value={image}
                onChangeText={(text) => setImage(text)}
            />

            <CustomButton
                title="เพิ่มการ์ด"
                backgroundColor="pink"
                onPress={addCard}
            />

            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Card
                            title={item.title}
                            content={item.content}
                            image={item.image}
                        />
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteCard(item.id)}
                        >
                            <Text style={styles.deleteText}>ลบ</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
    },
    cardList: {
        marginTop: 20,
    },
});

export default CardScreen;