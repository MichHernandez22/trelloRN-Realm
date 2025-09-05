import TaskList from "@/src/components/TaskList";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>      
      <View style={{padding:10}}>
        <TaskList/>        
      </View>      
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
