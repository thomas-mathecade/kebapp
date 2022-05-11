import { View, Text } from "react-native";
import { openDatabase } from 'react-native-sqlite-storage';

export default function App() {
  var db = openDatabase({ name: 'kebab.db' });
  const query = "CREATE TABLE restaurant (id INTEGER PRIMARY KEY, nom TEXT, telephone TEXT, email TEXT,numero INTEGER, rue TEXT, ville TEXT, codepostal INTEGER)";
  db.executeSql(query);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World !</Text>
    </View>
  );
}
