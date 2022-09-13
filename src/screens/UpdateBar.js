import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const UpdateBar = () => {
  return (
    <View style={styles.container}>
   
    <View style={styles.txtView}>
      <Text style={styles.txt1}>
        Software Update Available
      </Text>
    </View>
    <View style={styles.imgView}>
      <Image
      style={styles.img}
      source = {require("../assets/alert.png")}
      />
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
marginVertical:"8%",
    flexDirection:"row",
    height:40,
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    borderRadius:10,
    },
    
    image:{
        width:56,
        height:56,
        backgroundColor:"lightgrey",
        borderRadius:60
    },
    txt1:{
        fontSize:15,
        color:"black",
    },
    txt2:{
        fontSize:60,
        color:"black"
    },
    iconImg:{
        tintColor:"gainsboro",
        width:15,
        height:15
    },
    txtView:{
      // backgroundColor:"red"
    },
    iconView:{
      // backgroundColor:"yellow"
    },
    imgView:{
      // backgroundColor:"blue",
marginLeft:100
    },
    img:{
      width:22,
      height:22,
      borderRadius:30,
      resizeMode:"contain"

    }
    
    })

export default UpdateBar;