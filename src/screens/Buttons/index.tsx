import { Toast } from "components/GlobalToast";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export const Buttons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Toast.show({
            message: "Hello World",
          })
        }
      >
        <Text>Global Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Toast.show({
            message: "Hello new World",
            onDismiss() {
              console.log("dismissed-2");
            },
          })
        }
      >
        <Text>Another toast</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
