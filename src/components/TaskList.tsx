import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import TaskListItem from "./TaskListItem";

export default function TaskList(){
    const [tasks, setTasks] = useState([
        { description: 'First tasks'},
        { description: 'Second tasks'}
    ])
    return(
        <View style={{backgroundColor: '#101112', padding: 10, borderRadius: 5}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginVertical:10 }}>TODO</Text>
            <FlatList 
                data={tasks} 
                renderItem={({item})=> <TaskListItem task={item}/>}
                contentContainerStyle={{ gap: 5}}
            />
            
            {/*<TaskListItem task={{description:'Second Task'}}/>
            <TaskListItem task={{description:'Third Task'}}/>*/}
        </View>
    )
}