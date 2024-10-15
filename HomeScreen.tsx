import { Button, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { toggleCompleteToDo } from "./store/todosSlice";

export default function HomeScreen() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleToggleTodoCompleted = (id: number) => {
    dispatch(toggleCompleteToDo(id));
  };

  return (
    <View style={s.root}>
      {/* <Text>Home Screen</Text> */}
      <View>
        {todos.map((todo) => (
          <View key={todo.id} style={s.item}>
            <Text style={[{ flex: 1 }, todo.completed && s.completed]}>
              {todo.text}
            </Text>
            <Button
              title={todo.completed ? "Undo" : "Done"}
              onPress={() => handleToggleTodoCompleted(todo.id)}
            />
          </View>
        ))}
      </View>
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
