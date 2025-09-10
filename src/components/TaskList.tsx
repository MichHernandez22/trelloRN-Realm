import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import TaskListItem from "./TaskListItem";

export default function TaskList(){
    const [tasks, setTasks] = useState([
        { description: 'First tasks'},
        { description: 'Second tasks'}
    ]);

    const [newTask, setNewTask] = useState('');

    const createTask = () =>{
        console.warn('Create: ', newTask)
        setTasks([...tasks, {description: newTask}])
        setNewTask('')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>TODO</Text>
            <FlatList 
                data={tasks} 
                renderItem={({item})=> <TaskListItem task={item}/>}
                contentContainerStyle={{ gap: 5}}
            />
            
            {/*<TaskListItem task={{description:'Second Task'}}/>
            <TaskListItem task={{description:'Third Task'}}/>*/}

            <TextInput 
                value={newTask}
                onChangeText={setNewTask}
                placeholder="New Task" 
                placeholderTextColor="gray" 
                style={styles.input} />
            <Button title="Add task" onPress={createTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: '#101112', padding: 10, borderRadius: 5, gap:10},
    title: {color: 'white', fontWeight: 'bold', fontSize: 20, marginVertical:10 },
    input: {color: 'white', padding: 15, backgroundColor: '#1D2125', borderRadius: 5 }
})