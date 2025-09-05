import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; // ใช้ FontAwesome5 แทน Icon

const ModalScreen = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text>This is Modal Screen</Text>

            {/* ปุ่มเปิด Modal */}
            <TouchableOpacity style={styles.okButton} onPress={() => setIsVisible(true)}>
                <Text style={styles.okButtonText}>Open Modal</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal transparent={true} animationType="fade" visible={isVisible}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Welcome Message</Text>
                        <Text style={styles.msg}>ยินดีต้อนรับ</Text>

                        {/* ปุ่มปิด Modal และนำทาง */}
                        <TouchableOpacity
                            style={styles.okButton}
                            onPress={() => {
                                setIsVisible(false);
                                navigation.navigate("List");
                            }}
                        >
                            <FontAwesome5 name="door-open" size={24} color="#fff" />
                            <Text style={styles.okButtonText}>Go to List</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    okButton: {
        flexDirection: "row", // เพื่อให้ Icon และ Text อยู่ในแนวเดียวกัน
        alignItems: "center",
        backgroundColor: "blue",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    okButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5, // เว้นระยะระหว่าง Icon และข้อความ
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    msg: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
});

export default ModalScreen;