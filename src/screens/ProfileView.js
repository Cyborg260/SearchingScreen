import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const ProfileView = () => {
  return (
    <View style={styles.container}>
    <View style={styles.profileImg}>
    <Image
    style={styles.image}
    source={require("../assets/icons8-administrator-male-skin-type-7-48.png")}
    />
    </View>
    <View style={styles.txtView}>
      <Text style={styles.txt1}>
        Muhammad Shah
      </Text>
      <Text style={styles.txt2}>
        Apple ID, iCloud, Media & Purchases
      </Text>
    </View>
    <View style={styles.iconView}>
      <Image
      style={styles.iconImg}
      source={require("../assets/icons8-chevron-right-30.png")}
      />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
container:{
backgroundColor:"#fff",
marginTop:"4%",
flexDirection:"row",
height:80,
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:15,
borderRadius:10,
},
txtView:{
  // backgroundColor:"red",
  width:260
},
image:{
    width:60,
    height:60,
    backgroundColor:"lightgrey",
    borderRadius:60
},
txt1:{
    fontSize:18,
    color:"black",
},
txt2:{
    fontSize:14,
},
iconImg:{
    tintColor:"gainsboro",
    width:15,
    height:15
}

})
export default ProfileView;