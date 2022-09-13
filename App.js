import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Search from './src/screens/Search'
import ProfileView from './src/screens/ProfileView'
import UpdateBar from './src/screens/UpdateBar'
import FlatView from './src/screens/FlatView'
import FirstBox from './src/screens/FirstBox'
import SecondBox from './src/screens/SecondBox'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
      <View style={styles.txtView}>
        <Text style={styles.txt}>
          Settings
        </Text>
      </View>
      <Search />
      <ScrollView 
      showsVerticalScrollIndicator={false}
      > 
      <ProfileView />
      <UpdateBar/>

      <View >
      <FlatView/>
      </View>
      <View style={{marginBottom:100}}>
      <SecondBox/>
      </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f1f2f3"
    
  },
  innerView:{
    marginHorizontal: "4%",

  },

  txtView: {
    // backgroundColor: "red",
    justifyContent: "center",
    marginTop: "8%"
  },

  txt: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
  },

})
export default App;