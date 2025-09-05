import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { ColorSpace } from "react-native-reanimated";

const initialState = { count: 0 }
const reducer = (state ,action) => {
    switch(action.type) {
        case "INCREMENT":
            return{count: state.count + 1};
        case "DECREMENT":
            return{count: state.count - 1};
        case "RESET":
            return { count : 0}
        default:
            return state;
    }
}

const StateScreen = () => {
  //  const [value, setValue] = useState(0);
    const [state ,dispatch] = useReducer(reducer, initialState)
  

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{state.count}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="INCREMENT"
                    onPress={
                        () => dispatch({ type: "INCREMENT" })}
                    />
                <Button
                    title="DECREMENT"
                    color="red"
                    onPress={() => dispatch({ type: "DECREMENT"})}
                />
                <Button
                    title="RESET"
                    color="grey"
                    onPress={() => dispatch({ type: "RESET"})}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 100,
        textAlign: "center",
        marginBottom: 20,
    },
    buttonContainer: {
        width: 200,
        justifyContent: "space-between",
        height: 150, 
    },
});

export default StateScreen;