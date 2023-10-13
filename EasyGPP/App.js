import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';


const exercises = {
  'squat': [5, 15],
  'rope climb': [2, 5],
  'pull up': [5, 15],
  'pistol squat': [1, 4],
  'ATG squat': [2, 5],
  'push up': [10, 20],
  'ab hold': [30, 60],
  'leg lifts': [5, 10],
  'handstand hold': [15, 25],
}


const App = () => {

  const [repQty, setRepQty] = useState();
  const [exercise, setExercise] = useState()
  const [count, setCount] = useState({});

  const pickRandomExercise = () => {
    const index = Math.floor(Math.random() * Object.keys(exercises).length);
    const exerciseName = Object.keys(exercises)[index];
    const [min, max] = exercises[exerciseName]
    const numReps = min + Math.floor(Math.random() * (max - min));

    setExercise(exerciseName);
    setRepQty(numReps);
  }

  const updateCount = () => {
    setCount(prevCount => ({ ...prevCount, [exercise]: (prevCount[exercise] || 0) + repQty }));
    pickRandomExercise();
  }

  useEffect(() => {
    pickRandomExercise();
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Button title="-" onPress={() => setRepQty(curVal => curVal - 1)} />
      <Text style={styles.text}>{exercise}: {repQty} </Text>
      <Button title="+" onPress={() => setRepQty(curVal => curVal + 1)} />
      <View style={{ flexDirection: 'row', gap: 10, paddingTop: 10 }}>
        <Button title="Done" onPress={updateCount} />
        <Button title="Skip" onPress={pickRandomExercise} />
      </View>
      <Text style={{ paddingTop: 20 }}>{JSON.stringify(count)}</Text>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
