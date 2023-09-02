import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView,FlatList } from 'react-native';

 

export default function App() {
  const [enteredGoalText,setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals(currentCourserGoals => [...currentCourserGoals,enteredGoalText])
  }

  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
          <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
        <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={(itemData) => {
          return (
            <View  style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item}</Text>
            </View>
          )
        }
          
        } />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    marginBottom:24,
    borderBottomColor:'#cccccc',
    borderBottomWidth:1
  },
  textInput:{
    borderWidth:1,
    borderColor: '#cccccc',
    width:'70%'
  },
  goalsContainer:{
    flex:4
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc'
      },

    goalText :{
        color:'white'
    }

});
