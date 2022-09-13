import { View, Text,StyleSheet, SafeAreaView, FlatList ,Image} from 'react-native'
import React from 'react'

const data =[
  {
    image:require("../assets/notifications.png"),
    title:"Notifications",
    icon:require("../assets/icons8-chevron-right-30.png")
  },
  {
    image:require("../assets/S&H.png"),
    title:"Sounds & Haptics",
    icon:require("../assets/icons8-chevron-right-30.png")
  },
  {
    image:require("../assets/focus.png"),
    title:"Focus",
    icon:require("../assets/icons8-chevron-right-30.png")
  },
  {
    image:require("../assets/icons8-sand-timer-50.png"),
    title:"Sand Timer",
    icon:require("../assets/icons8-chevron-right-30.png")
  },
]

const Items = ({image,title,icon})=>(
<View style={styles.wholeView}>
  <View style={styles.imgView}>
    <Image
    style={styles.img}
    source={image}
    />
  </View>
  <View style={styles.bothViews}>
    <View style={styles.txtView}>
      <Text style={styles.txt}>
{title}
      </Text>
    </View>
    <View style={styles.iconView}>
      <Image
      style={styles.icon}
      source={icon}
      />
    </View>
  </View>
</View>
);
const SecondBox = () => {
  const renderItem=({item})=>(
<Items
image={item.image}
title={item.title}
icon={item.icon}
/>
    )
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.flatView}>
      <FlatList
      data={data}
      renderItem={renderItem}
      />
    </View>
   </SafeAreaView>
  )
}
const styles=StyleSheet.create({
wholeView:{
flexDirection:"row",
// backgroundColor:"red",
alignItems:"center",
padding:3

},
bothViews:{
  flexDirection:"row",
  // backgroundColor:"blue",
  width:"85%",
  justifyContent:"space-between",
  borderBottomWidth:1,
  borderBottomColor:"#f1f2f3",
  height:40,
  alignItems:"center",
  marginVertical:5
},
imgView:{
  // backgroundColor:"yellow",
  width:"15%",
  
},
img:{
  width:32,
  height:32,
  borderRadius:10,
  alignSelf:"center",
},
flatView:{
  flexDirection:"row",
  backgroundColor:"#fff",
  borderWidth:1,
  borderRadius:10,
  borderColor:"#fff",
  marginVertical:30
},
txt:{
  color:"black",
  fontSize:18,
},
icon:{
  tintColor:"gainsboro",
  height:15,
  width:15
},
iconView:{
  marginRight:10
}
})
export default SecondBox;