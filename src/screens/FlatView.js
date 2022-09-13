import { View, Text, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import ToggleScreen from './ToggleSwitch';


const data = [
  {
    image: require("../assets/airplane.png"),
    title: "Airplane Mode",
    toggle: <ToggleScreen />,
    // title2:"icon...",
    // image2:require("../assets/icons8-chevron-right-30.png")
  },
  {
    image: require("../assets/wifi.png"),
    title: "Wi-Fi",
    title2: "Tek-Floor",
    image2: require("../assets/icons8-chevron-right-30.png")
  },
  {
    image: require("../assets/bluetoorh.png"),
    title: "Bluetooth",
    title2: "Not Connected",
    image2: require("../assets/icons8-chevron-right-30.png")
  },
  {
    image: require("../assets/hotspot.png"),
    title: "Mobile Data",
    title2: "Off",
    image2: require("../assets/icons8-chevron-right-30.png")

  },
  {
    image: require("../assets/personel.png"),
    title: "Personal Hotspot",
    title2: "Off",
    image2: require("../assets/icons8-chevron-right-30.png")
  },
  {
    image: require("../assets/vpn.png"),
    title: "VPN",
    toggle: <ToggleScreen />
    // title2:"icon...",
    // image2:require("../assets/icons8-chevron-right-30.png")
  },
]

const Items = ({ index, image, title, image2, title2 }) => (
  <View style={styles.container}>

    <View style={styles.ImgView1}>
      <Image
        style={styles.img1}
        source={image}
      />
    </View>
    <View style={styles.bothtxticon}>
      <View>
        {
           index == 4
           ?
           <View style={styles.txtView}>
           <Text style={styles.specialTxt}>
          {title}
           </Text>
           </View>
           :
           <View>
           <Text style={styles.txt1}>
          {title}
        </Text>
           </View>
        }
       
      </View>
      <View >
        {
           index == 0 
        ? <ToggleScreen/>
        :
        index == 5 
        ?
        <ToggleScreen/>
        :
         <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View>
          <Text style={styles.txt2}>
            {title2}
          </Text>
        </View>
        <View style={styles.imgView2}>
          <Image
            style={styles.img2}
            source={image2}
          />
        </View>
          </View>
        }
      </View>
    </View>
  </View>
);
const FlatView = () => {

  const renderItem = ({ item, index }) => (
    <Items
      index={index}
      image={item.image}
      title={item.title}
      image2={item.image2}
      title2={item.title2}
    />

  );

  return (
    <SafeAreaView>

      <View style={styles.FlatView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          vertical={true}

        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor:"blue",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    
  },
  txt1: {
    color: "black",
    fontSize: 18,

  },
  specialTxt:{
    color: "grey",
    fontSize: 18,
  },
  txt2: {
    color: "grey",
    fontSize: 18,

  },
  img1: {
    width: 32,
    height: 32,
    borderRadius: 10

  },
  img2: {
    tintColor: "gainsboro",
    height: 15,
    width: 15
  },
  ImgView1: {
    marginHorizontal: 10,
  },
  imgView2: {
    marginHorizontal: 10
  },
  bothtxticon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 320,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f2f3",
    marginVertical:5
  },

  FlatView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff"
  }

})
export default FlatView;