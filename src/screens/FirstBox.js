import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import ToggleSwitch from 'toggle-switch-react-native'

const FirstBox = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wholeView}>

                <View style={styles.ViewImg1}>
                    <Image
                        style={styles.img1}
                        source={require("../assets/airplane.png")}
                    />
                </View>
                <View style={styles.toggleTxtView}>
                    <View>
                        <Text style={styles.txt1}>
                            Airplane Mode
                        </Text>
                    </View>
                    <View style={styles.toggleView}>
                        <ToggleSwitch
                        height={5}
                            isOn={false}
                            onColor="green"
                            offColor="grey"
                            size="large"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        //  labelStyle={{ color: "black", fontWeight: "900" }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: "red",
        padding:10
    },
    wholeView:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"grey"

    },
toggleTxtView:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"blue",
    width:"86%",
    alignItems:"center",
    height:50
},
img1:{
    width:32,
    height:32,
    borderRadius:10,
},
txt1:{
    marginHorizontal:10,
    color:"black",
  fontSize:18,
}
})
export default FirstBox;













{/* <View style={styles.iconView}>
<Image
    style={styles.icon}
    source={require("../assets/icons8-chevron-right-30.png")}
/>
</View> */}