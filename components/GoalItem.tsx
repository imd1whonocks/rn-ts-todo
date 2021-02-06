import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Goal } from '../types';

interface GoalProps extends Goal {
    onDeleteGoalClick: (id: string) => void
}

const GoalItem = ({goal, onDeleteGoalClick, id}: GoalProps) => {
    return (
        <TouchableOpacity onPress={() => onDeleteGoalClick(id)}>
            <View style={styles.listItem}>
                <Text>{goal}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
      }
})
export default GoalItem
