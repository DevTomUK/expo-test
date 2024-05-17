import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import {db} from '../../config'
import { getDatabase, ref, set, get, child } from "firebase/database";
import { Button, Header, Rating } from 'react-native-elements';
import { PricingButton } from "react-native-elements/dist/pricing/PricingCard";

export default function Index() {

  const [createNum, setCreateNum] = useState(0)

  function create () {

    const newNum= (Math.random()*100).toFixed(0)
    setCreateNum(newNum)
    // .then(()=>{
    //   alert("submitted")
    // })
    // .catch((error)=>{
    //   alert(error)
    // })
  }

      useEffect(()=>{
        set(ref(db, 'test/' + inputVal), {
          testRow: createNum,
          anotherTest: 'user3'
      })
      }, [createNum])

  function readClick () {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `test/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
      }

  const [countAmount, setCountAmount] = useState(0)
  const [theme, setTheme] = useState('light')
  const [BGCol, setBGCol] = useState('#fff')
  const [textCol, setTextCol] = useState('#333')
  const [inputVal, setInputVal] = useState('')

  function handleClick(){
    setCountAmount(curr => curr + 1)
  }

  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark')
      setBGCol('#333')
      setTextCol('#fff')
    }
    if (theme === 'dark') {
      setTheme('light')
      setBGCol('#fff')
      setTextCol('#333')
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: BGCol,
    },
    title: {
      marginTop: 40,
      color: textCol,
      marginLeft: 'auto',
      marginRight: 'auto',
      fontWeight: 'bold',
      fontSize: 16,
    },
    clicker: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    clickerText: {
      fontSize: 100,
      color: textCol,
    },
    countAmount: {
      fontSize: 20,
    },
    textInput: {
      borderColor: 'gray',
      borderWidth: 0.2
    }
  })

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Test!</Text>
      <Text style={styles.countAmount}>{countAmount}</Text>
      <Button><Text style={styles.clickerText}>Button</Text></Button>
      <Text style={styles.countAmount}>{createNum}</Text>
      <TextInput onChangeText={newText => setInputVal(newText)} style={styles.textInput}>Type here</TextInput>
      <Text>{}</Text>
      <TouchableOpacity style={styles.clicker} onPress={create}><Text style={styles.clickerText}>Create</Text></TouchableOpacity>
      <TouchableOpacity style={styles.clicker} onPress={readClick}><Text style={styles.clickerText}>Read</Text></TouchableOpacity>
      <TouchableOpacity style={styles.clicker} onPress={handleTheme}><Text style={styles.clickerText}>Theme</Text></TouchableOpacity>
    </View>
  );


}
