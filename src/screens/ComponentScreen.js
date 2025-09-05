import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert, Image } from "react-native";

const ComponentScreen = () => {
  const name = <Text style={styles.TextStyle}>2024</Text>;

  const showAlert = (title, msg) => {
    Alert.alert(title, msg, [
      { text: "OK", onPress: () => console.log("Click OK") },
      { text: "Cancel", onPress: () => console.log("Click Cancel") },
    ]);
  };

  return (
    <View style={styles.ViewStyle}>
      {/* ส่วนแสดงรูปภาพ */}
      <TouchableOpacity
        onPress={() => showAlert("Pic said", "มาสิว่ะสีแสดดดด")}
      >
        <Image
          style={styles.ImageStyle}
          source={require("../img/Raze.jpg")}
        />
      </TouchableOpacity>

      {/* ส่วนข้อความ */}
      <Text style={styles.TextStyle}>This is Component Screen</Text>
      <Text style={styles.TextStyle}>by Poorinat</Text>
      {name}

      {/* ปุ่ม Say Hi */}
      <View style={styles.ButtonStyle}>
        <Button
          title="Say Hi!!!"
          color="pink"
          onPress={() => showAlert("Butt said", "What the Faadddd")}
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
    backgroundColor: "#f5f5f5", // สีพื้นหลัง
  },
  TextStyle: {
    fontSize: 20,

  },
  ImageStyle: {
    width: 200,
    height: 200,
    margin: 5,
    borderRadius: 15, // มุมโค้งของรูปภาพ
    marginBottom: 20, // ระยะห่างด้านล่างของรูปภาพ
  },
  ButtonStyle: {
    width: 200, // ความกว้างของปุ่ม
  },
});

export default ComponentScreen;