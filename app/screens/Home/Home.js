import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../consts'

export default function Home() {
    return (
        <View style={styles.container}>
            {/* New Plan  */}
            <View style={styles.newPlanSection}></View>
            {/* Today's Share  */}
            <View style={styles.todayShareSection}></View>
            {/* Add Friend */}
            <View style={styles.addFriendSection}></View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
     flex:1
    },
    newPlanSection: {
        height: "30%",
        backgroundColor: COLORS.green,
         borderBottomLeftRadius:50,
         borderBottomRightRadius:50,
    },
    todayShareSection: {
        height:"50%"
    },
    addFriendSection: {
        height:"20%"
    }

}
)