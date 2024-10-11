import { StatusBar, StyleSheet, View } from 'react-native'
import React, {useEffect} from 'react'
import EmptyList from './EmptyList';
import { useTasksContext } from '../context/TasksContext';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { getAsyncStore } from '../utils/getAsyncStore';
import { MY_TASKS_STORE } from '../constants/store';
import { setAsyncStore } from '../utils/setAsyncStore'; 

const Todo = () => {
const {tasks, setTasks} = useTasksContext();
useEffect(() => {
    const initializeTasksWithStoredData = async () => {
        try {
            const storedTasks = await getAsyncStore(MY_TASKS_STORE);
            setTasks(storedTasks);
        } catch (e) {
            console.error("Error getting tasks:", e);
        }
    }
    initializeTasksWithStoredData();
    
  }, []);

  useEffect(() => {
    const updateStoredTasks = async () => {
        try {
            await setAsyncStore(MY_TASKS_STORE, tasks);
        } catch (e) {
            console.error("Error storing tasks:", e);
        }
    }
    updateStoredTasks();
  }, [tasks]);

  return (
    <View style={styles.container}>
        {
            tasks?.length === 0 ? <EmptyList /> : <TaskList />
        }
        <AddTask />
    </View>
    
  )
}

export default Todo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      justifyContent: 'space-between',
      alignContent: 'flex-start',
      paddingHorizontal: 20,
      width: '100%'
    },
  });