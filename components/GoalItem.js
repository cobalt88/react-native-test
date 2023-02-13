import { View, Text, StyleSheet, Pressable, Modal } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalsView}>
      <Pressable
        android_ripple={{ color: `#dddddd` }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#2E2EFF" : "#2E2EFF" },
        ]}
      >
        <Text style={styles.goalsText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsView: {
    borderWidth: 1,
    borderColor: "#cccccc",

    margin: 10,
    backgroundColor: "#2E2EFF",
    borderRadius: 5,
  },
  goalsText: {
    fontSize: 15,
    padding: 10,
  },
});
