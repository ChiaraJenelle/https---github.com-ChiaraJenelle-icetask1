import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

export type Task = {
  id: number;
  task: string;
  name: string;
  surname: string;
  studentNumber: string;
};

export type RootParamList = {
  ViewScreen: undefined;
  AddTaskScreen: undefined;
};

function App() {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [studentNumber, setStudentNumber] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const AddTaskOnPress = () => {
    if (name && surname && studentNumber) {
      setSubmitted(true);
    }
  };

  const FirstScreen = () => (
    <View style={styles.firstScreen}>
      <Text style={styles.heading}>Student Information</Text>
      <View style={styles.userInputView}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.input}
          placeholder="Student Number"
          value={studentNumber}
          onChangeText={setStudentNumber}
        />
        <TouchableHighlight onPress={AddTaskOnPress} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );

  const SecondScreen = () => (
    <View style={styles.secondScreen}>
      <Text style={styles.welcomeText}>Welcome, {name} {surname}!</Text>
      <Text style={styles.studentNumberText}>Your Student Number is: {studentNumber}</Text>
    </View>
  );

  return submitted ? <SecondScreen /> : <FirstScreen />;
}

const styles = StyleSheet.create({
  firstScreen: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondScreen: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    margin: 20,
    fontSize: 30,
    color: 'darkblue',
    fontWeight: 'bold',
  },
  userInputView: {
    width: 300,
    marginVertical: 15,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'lightgrey',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: 'black',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'darkblue',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkgreen',
    marginBottom: 20,
  },
  studentNumberText: {
    fontSize: 25,
    color: 'black',
  },
});

export default App;