import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view";

const SwipeScreen = () => {
    const [listData, setListData] = useState([
        { id: '1', text: 'รายการที่ 1' },
        { id: '2', text: 'รายการที่ 2' },
        { id: '3', text: 'รายการที่ 3' },
        { id: '4', text: 'รายการที่ 4' },
        { id: '5', text: 'รายการที่ 5' },
    ]);

    const deleteItem = (id) => {
        const newList = listData.filter((item) => item.id !== id);
        setListData(newList);
    };

    // ฟังก์ชันสำหรับแสดง UI ด้านหลังเมื่อมีการปัดรายการ
    const renderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={styles.backRightBtn}
                onPress={() => deleteItem(item.id)}
            >
                <Text style={styles.backText}>ลบ</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>This is Swipe Screen</Text>
            <SwipeListView
                data={listData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>{item.text}</Text>
                    </View>
                )}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-75} // ระยะที่สามารถปัดรายการไปทางขวาได้
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    listItemText: {
        fontSize: 16,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#ff3b30',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderRadius: 5,
        marginBottom: 10,
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: '100%',
        backgroundColor: '#ff3b30',
        borderRadius: 5,
    },
    backText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SwipeScreen;