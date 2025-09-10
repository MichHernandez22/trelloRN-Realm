import TaskBoard from "@/src/components/TaskBoard";
import { StyleSheet, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>      
      <TaskBoard/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
