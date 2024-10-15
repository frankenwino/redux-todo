import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/todoActions";

export default function TodoFrom() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <View style={s.root}>
      <Text style={s.title}>Add a new todo</Text>
      <View style={s.row}>
        <TextInput
          placeholder="Add a todo"
          style={s.input}
          value={text}
          onChangeText={setText}
        />
        <Button title="Add" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  root: {
    padding: 10,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 24,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#111",
  },
});
