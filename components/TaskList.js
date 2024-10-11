import { ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import { useTasksContext } from '../context/TasksContext'
import TodoItem from './TodoItem';
import TasksCompleteMsg from './TasksCompleteMsg'; 

const TaskList = () => {
    const {tasks, setTasks} = useTasksContext();
    const deleteTask = async (id) => {    
        setTasks(tasks.filter((task) => task.id !== id))
    }
    
    const toggleComplete = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task))
    }

    const areAllTasksDone = tasks.every(task => task.done)
  return (
    <ScrollView>
        {
            tasks.map((task) => (
            <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
            ))
        }
        {areAllTasksDone && <TasksCompleteMsg />}
    </ScrollView>
  )
}

export default TaskList

const styles = StyleSheet.create({})