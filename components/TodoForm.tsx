import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function TodoFrom() {
  return (
    <View style={s.root}>
      <Text style={s.title}>Add a new todo</Text>
      <View style={s.row}>
        <TextInput placeholder="Add a todo" style={s.input} />
        <Button title="Add" />
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
