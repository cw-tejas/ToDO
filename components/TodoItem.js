import { Button, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors' 

const TodoItem = ({task, deleteTask, toggleComplete}) => {
    const {id, title, done, createdAt} = task;
    const taskCompleteStyle = done ? { textDecorationLine: "line-through" } : {};
  return (
    <View style={styles.row}>
        <Text style={styles.column}>{id}</Text>
        <Switch
            style={{ marginRight: 4 }}
            trackColor={{false: COLORS.GRAY, true: COLORS.LIGHTBLUE}}
            thumbColor={done ? COLORS.DODGERBLUE : COLORS.LIGHTGRAY}
            onValueChange={() => toggleComplete(id)}
            value={done}
        />
        <View style={{flex: 1}}>
            <Text style={[styles.taskTitle, taskCompleteStyle]}>{title}</Text>
            <Text style={styles.taskDate}>{createdAt}</Text>
        </View>
        <Button title="delete task" onPress={() => deleteTask(id)} />
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    row: {
        padding: 4,
        borderBottomColor: COLORS.DODGERBLUE,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center"
    },
    column: {
        width: "auto",
        marginRight: 4
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
        textAlign: "left"
    },
    taskDate: {
        fontSize: 12,
        color: COLORS.GRAY,
        flex: 1,
        textAlign: "left"
    }
})