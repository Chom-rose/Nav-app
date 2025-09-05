import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";

const ListScreen = () => {
  const history = [
    { date: "Monday 3 May", name: "Fia", status: "11:00" },
    { date: "Monday 25 November", name: "Chom", status: "12:04" },
    { date: "Saturday 21 November", name: "Poo", status: "13:40" },
    { date: "Sunday 17 November", name: "Chompoo", status: "23:59" },
    { date: "Tuesday 22 October", name: "Non", status: "14:11" },
    { date: "Tuesday 22 October", name: "Gus", status: "14:10" },
    { date: "Tuesday 22 October", name: "Nine", status: "14:09" },
    { date: "Tuesday 22 October", name: "Ong", status: "14:06" },
    { date: "Sunday 20 October", name: "Chompoo", status: "15:33" },
    { date: "Saturday 19 October", name: "Fia", status: "14:22" },
    { date: "Saturday 12 October", name: "บัวลอย", status: "13:11" },
  ];

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.HanderStyle}></Text>
      <FlatList
        keyExtractor={(item, index) => `${item.date}-${index}`}
        data={history}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.sectionHeaderStyle}>{item.date}</Text>
              <View style={styles.ListStyle}>
                <Image
                  style={styles.ImageStyles}
                  source={{ uri: "https://example.com/image.jpg" }} 
                />
                <Text style={styles.TextStyle}>{item.name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 10,
    backgroundColor: "#000", // เปลี่ยนเป็นสีดำเพื่อให้ตัวอักษรสีขาวเด่นขึ้น
  },
  sectionHeaderStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    color: "#fff",
  },
  HanderStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    padding: 10,
    color: "#fff",
  },
  ListStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#333", // สีพื้นหลังรายการ
    borderRadius: 10,
    marginTop: 10,
  },
  ImageStyles: {
    width: 50,
    height: 50,
    margin: 3,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 25, // ทำให้รูปภาพเป็นวงกลม
  },
  TextStyle: {
    fontSize: 18,
    color: "#fff",
    paddingLeft: 20,
  },
});

export default ListScreen;