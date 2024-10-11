import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useAddNewTask } from '../hooks/useAddNewTask'
import { useTasksContext } from '../context/TasksContext'; 

const AddTask = () => {
    const {addNewTask} = useAddNewTask();
    const handleAddTask = (event) => {
        event.preventDefault();
        addNewTask();
    }
    const {currentTask, setCurrentTask} = useTasksContext();
  return (
    <View style={{ margin: 20}}>
        <TextInput style={{ marginBottom: 10, height: 40, borderBottomWidth: 1 }} placeholder='e.g. Walk the Dog' value={currentTask} autoFocus={true} onChangeText={setCurrentTask} />
        <Button title='Add Task' onPress={handleAddTask} />
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({})