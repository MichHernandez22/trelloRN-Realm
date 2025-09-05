import { Text, View } from "react-native";
import TaskListItem from "./TaskListItem";

export default function TaskList(){
    return(
        <View style={{backgroundColor: '#101112'}}>
            <Text>TODO</Text>
            <TaskListItem task={{description:'First Task'}}/>
            <TaskListItem task={{description:'Second Task'}}/>
            <TaskListItem task={{description:'Third Task'}}/>
        </View>
    )
}