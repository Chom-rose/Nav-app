import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet , ActivityIndicator} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const LoadUsers = () => {
    const [users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Loading data...");

        const fetchData = async() => {
            try {
                //Load or Fetch data
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = await response.json();
                setUsers(data);
            } catch {
                //show error
                console.log("Error: ",error)
            } finally {
                setLoading(false);
            }
        };
        fetchData()
    }, []);

    return (
        <View style={styles.container}>
            {Loading?(
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.text}>
                        {item.name} [{item.email}]
                    </Text>
                )}
           />
        )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize:15,
    }
});

export default LoadUsers;