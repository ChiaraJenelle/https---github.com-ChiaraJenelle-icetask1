import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handlePress = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    } else {
      alert('Please enter a task!');
    }
  };

  const renderItem = ({ item }: { item: Task }) => (
    <TouchableOpacity
      style={[styles.taskBox, item.completed ? styles.completedTask : {}]}
      onPress={() => handlePress(item.id)}
    >
      <Text style={[styles.task, item.completed ? styles.completedTaskText : {}]}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('./assets/image.png')} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.heading}>My Task List</Text>

        <View style={styles.taskContainer}>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={styles.addTaskContainer}>
          <TextInput
            style={styles.addTaskInput}
            placeholder="Add a task"
            value={newTask}
            onChangeText={setNewTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>

      
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  taskContainer: {
    flex: 1,
    width: '80%',
  },
  taskBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  task: {
    fontSize: 16,
    color: '#fff',
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  addTaskInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginRight: 10,
    color: '#fff', // Ensures text is visible in dark background
  },
  addButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
  },
  completedTask: {
    backgroundColor: '#ccc',
  },
  completedTaskText: {
    color: '#888',
    textDecorationLine: 'line-through', // Correctly applies line-through for completed tasks
  },
});
