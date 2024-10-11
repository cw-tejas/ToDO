import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors' 

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.grayText}>Looks like you're ready to conquer the day!</Text>
      <Text style={styles.grayText}>Add your first task and let’s get started!</Text>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grayText: {
        color: COLORS.GRAY
    }
})