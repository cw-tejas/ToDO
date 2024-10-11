import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState, useEffect } from "react"; 

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("");    

    return (
        <TasksContext.Provider value={{ tasks, setTasks, currentTask, setCurrentTask }}>
            {children}
        </TasksContext.Provider>
    );
}

export const useTasksContext = () => {
    return useContext(TasksContext);
}