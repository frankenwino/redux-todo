import { StyleSheet, View } from "react-native";
import TodoList from "./components/TodoList";

export default function HomeScreen() {
  return (
    <View style={s.root}>
      <TodoList />
    </View>
  );
}

const s = StyleSheet.create({
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
  completed: {
    textDecorationLine: "line-through",
    color: "#bbb",
  },
});
