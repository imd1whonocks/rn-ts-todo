import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native'

type GoalInputProps = { 
    onAddGoalClick: Function,
    closeModal: Function,
    isVisible: boolean,
}
const GoalInput = ({onAddGoalClick, isVisible, closeModal}: GoalInputProps) => {
    const [enteredGoal, setEnteredGoal] = useState<string>('')
    const handleAddGoalInputChange = (text: string) => {
        setEnteredGoal(text);
    }
    const handleAddGoalClick = (enteredGoal: string) => {
        if (enteredGoal) {
            onAddGoalClick(enteredGoal)
            setEnteredGoal('');
        }
    }
    return (
        <Modal visible={isVisible} animationType={'slide'}>
            <View style={styles.addGoal}>
                <TextInput 
                    placeholder="Add course goal"
                    style={styles.addGoalInput}
                    onChangeText={handleAddGoalInputChange}
                    value={enteredGoal}
                />
                <View style={styles.btnBox}>
                    <View style={styles.btn}>
                        <Button
                            title="CANCEL"
                            color={'red'}
                            onPress={() => closeModal()}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button 
                            title="ADD" 
                            onPress={() => handleAddGoalClick(enteredGoal)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    addGoal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    addGoalInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    btnBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    btn: {
        width: '40%',
    }
})
export default GoalInput
