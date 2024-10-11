import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 

const TasksCompleteMsg = () => {
  return (
    <View style={styles.container}>
      <Text>You're all caught up! No tasks left.</Text>
      <Text>Enjoy your free time!</Text>
    </View>
  )
}

export default TasksCompleteMsg

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})