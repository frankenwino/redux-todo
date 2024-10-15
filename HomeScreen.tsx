import { Button, StyleSheet, Text, View } from "react-native";
import { mockedToDos } from "./data";

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      {/* <Text>Home Screen</Text> */}
      <View>
        {mockedToDos.map((toDo) => (
          <View key={toDo.id} style={styles.item}>
            <Text style={{ flex: 1 }}>{toDo.text}</Text>
            <Button title="Done" />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignContent: "center",
    // justifyContent: "space-between",
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 16,
  },
});
