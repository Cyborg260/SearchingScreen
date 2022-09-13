import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import ToggleSwitch from 'toggle-switch-react-native'

const ToggleScreen = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <View style={styles.toggleView}>
<ToggleSwitch
isOn={false}
onColor="#f1f2f3"
offColor="gainsboro"
size="large"
onToggle={isOn => console.log("changed to : ", isOn)}
 labelStyle={{ color: "black", fontWeight: "900" }}
/>
    </View>
  )
}
const styles=StyleSheet.create({
toggleView:{
    alignItems:"center",
// backgroundColor:"red",
marginBottom:12,
},
})
export default ToggleScreen;