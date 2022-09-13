import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const search = () => {
    return (
        <View style={styles.inputView}>
            <View>
                <Image
                    style={styles.img}
                    source={require("../assets/icons8-search-50.png")}
                />
            </View>
            <TextInput
                    style={styles.txtinput}
                    placeholder='Search'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "gainsboro",
        height: 35,
        marginTop: "2%",
        flexDirection: "row",
        paddingLeft: 5,
        borderRadius: 10

    },
    txtinput: {
        // backgroundColor: "yellow",
        height: 33,
        width: 360,
        borderRadius: 10,
        fontSize: 16,
        padding: 5,

    },
    img: {
        marginVertical: 6,
        width: 20,
        height: 20,
        tintColor: "grey"
    },
})
export default search;