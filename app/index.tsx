import { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [countAmount, setCountAmount] = useState(0)
  const [theme, setTheme] = useState('light')
  const [BGCol, setBGCol] = useState('#fff')
  const [textCol, setTextCol] = useState('#333')

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
      color: 'red',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontWeight: 'bold',
      fontSize: 20,
    },
    clicker: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    clickerText: {
      fontSize: 100,
    },
    countAmount: {
      fontSize: 20,
    }
  })

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Test!</Text>
      <Text style={styles.countAmount}>{countAmount}</Text>
      <TouchableOpacity style={styles.clicker} onPress={handleClick}><Text style={styles.clickerText}>Count</Text></TouchableOpacity>
      <TouchableOpacity style={styles.clicker} onPress={handleTheme}><Text style={styles.clickerText}>Theme</Text></TouchableOpacity>
    </View>
  );


}
