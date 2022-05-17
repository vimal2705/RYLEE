import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';

 

const App = () => {

  useEffect(() => {
    // Update the document title using the browser API
  firestore().collection('Clients')
    .doc("EEN1m1Z3ywaHisByN3NTGtAmhIU2")
    .onSnapshot(documentSnapshot => {
      console.log('User data: ', documentSnapshot);
    });

  });
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App