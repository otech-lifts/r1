import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([])
  function handleAddItem() {
    console.log("Item", item);
    setTask([...task, item]);
    console.log(task);
  }
  function handleInputText(text) {
    setItem(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText ={handleInputText}
            style={styles.input} placeholder = "xxxxxzadaj Task"/>
            <Button onPress={handleAddItem} title = "ADD" />
        <StatusBar style="auto" />
      </View>
      <View style={styles.udalosti}>
        {task.map((i)=>{
          <Text>{i}</Text>;
        })}
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
  inputContainer:{flex:1, backgroundColor: "#cfcbcb", alignItems: "center", justifyContent: "center", flexDirection: "row", justifyContent: "space-around"},
  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#0972fa",
  },
  udalosti: {
    flex: 5,
  }
});
