import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  Button, 
  StyleSheet, 
  View, 
  FlatList 
} from 'react-native';
import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem'
import { Goal } from './types';

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [showAddGoalModal, setShowAddGoalModal] = useState<boolean>(false)

  const handleAddGoalClick = (enteredGoal: string) => {
    setGoals((prevGoals) => [...prevGoals, 
      {
        goal: enteredGoal, 
        id: new Date().getTime().toString()
      }
    ]);
    toggleAddGoalModal();
  }
  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter((goal) =>  goal.id !== id));
  }
  const toggleAddGoalModal = () => {
    setShowAddGoalModal(!showAddGoalModal);
  }
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={toggleAddGoalModal}/>
      <GoalInput 
        onAddGoalClick={handleAddGoalClick} 
        isVisible={showAddGoalModal}
        closeModal={toggleAddGoalModal}
      />
      {/* <ScrollView style={styles.goals}>
        {goals.map(goal => 
          <View style={styles.listItem}   key={goal}>
            <Text>{goal}</Text>
          </View>
        )}
      </ScrollView> */}
      {/* Virtual List of Web */}
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <GoalItem 
            {...itemData.item} 
            onDeleteGoalClick={handleDeleteGoal}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
});
