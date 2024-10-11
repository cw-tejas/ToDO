import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAsyncStore = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null; 
        } catch (e) {
            console.log(e);
        }
    };