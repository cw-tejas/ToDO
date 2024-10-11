import { useTasksContext } from "../context/TasksContext"
import { Alert } from "react-native";
import { setAsyncStore } from "../utils/setAsyncStore";
import { MY_TASKS_STORE } from "../constants/store";

export const useAddNewTask = () => {
    const {tasks, currentTask, setCurrentTask, setTasks} = useTasksContext();

    const addNewTask = async () => {
        const taskCount = tasks.length;
        if(currentTask.trim() === '') {
            Alert.alert("Oops! Looks like you forgot to write a task. Give it another try!")
            return;
        }
        const newId = taskCount <=0 ? 1 : (tasks[taskCount - 1]?.id + 1)
        const newTask = {
            id: newId,
            title: currentTask,
            createdAt: new Date().toLocaleString('en-IN'),
            done: false,
        };       
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        await setAsyncStore(MY_TASKS_STORE, updatedTasks);        
        setCurrentTask(''); 
    }

    return {addNewTask};
}