import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Card from "../components/Card";

const heroes = [
  {
    id: "1",
    title: "Ellen Joe",
    content:
      "A cursed blade originally wielded by the first head of the Hoshimi family and passed down from generation to generation. Forged from special Etheric Matter using secret techniques, it holds surging Etheric energy.",
    image : "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/50/Agent_Ellen_Joe_Introduction.png/revision/latest/scale-to-width-down/1000?cb=20231117091622",
  },
  {
    id: "2",
    title: "Hoshimi Miyabi",
    content:
      "A cursed blade originally wielded by the first head of the Hoshimi family and passed down from generation to generation. Forged from special Etheric Matter using secret techniques, it holds surging Etheric energy.",
    image: "https://static.wikia.nocookie.net/zenless-zone-zero/images/2/2b/Agent_Hoshimi_Miyabi_Agent_Record_3.png/revision/latest/scale-to-width-down/1000?cb=20241108042136",
  },
  {
    id: "3",
    title: "Astra Yao",
    content:
      "Hemiola Astra's exclusive performance instrument, handcrafted by renowned acoustics artian Melody, is truly one of a kind.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtku-es1JJ7BjLqXvTs09t-93ZApNu8OAJ-g&s",
  },
];

const CardScreen = () => {
  const [searchText, setSearchText] = useState(""); 
  const [filteredHeroes, setFilteredHeroes] = useState(heroes); 


  const searchHero = (text) => {
    setSearchText(text);
    const filteredData = heroes.filter(hero =>
      hero.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredHeroes(filteredData);
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="ค้นหา..."
        value={searchText}
        onChangeText={searchHero}
      />
      {filteredHeroes.length === 0 ? (
        <Text style={styles.noHero}>อะไรวะ</Text>
      ) : (
        <FlatList
          data={filteredHeroes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Card title={item.title} content={item.content} image={item.image} />;
          }}
          contentContainerStyle={styles.cardList}
        />
      )}
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
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  cardList: {
    marginTop: 20,
  },
  noHero: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default CardScreen;
