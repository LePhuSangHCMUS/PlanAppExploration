import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SIZES, COLORS, icons, images, FONTS } from '../../consts';
export const PlantItem = ({ item }) => {

    return <View style={styles.plantItem} >
        <Image style={styles.plantItemImage} source={item.img} />
        <View style={styles.plantItemName}>
            <Text style={[,{...FONTS.body3,color:COLORS.white}]} >{ item.name}</Text>
            
        </View>

        <TouchableOpacity style={{
            position: "absolute",
            top: "15%",
            left:10
             
        }}>
            <Image style={{
                // tintColor: COLORS.green,
                width: 20,
                height: 20,
                 resizeMode:"contain"
            }} source={item?.favorite?icons.heartRed:icons.heratGreenOutline}/>
        </TouchableOpacity>
    </View>

}
export default function Home() {

    const [newPlants, setNewPlants] = useState([
        {
            id: "1",
            name: "Plant 1",
            img: images.plant1,
            favorite:false,
        },
        {
            id: "2",
            name: "Plant 2",
            img: images.plant2,
            favorite:false,
            
        },
        {
            id: "3",
            name: "Plant 3",
            img: images.plant3,
            favorite:true,

        },
        {
            id: "4",
            name: "Plant 4",
            img: images.plant4
        },
        {
            id: "5",
            name: "Plant 5",
            img: images.plant5
        },
        {
            id: "6",
            name: "Plant 6",
            img: images.plant6
        },
        {
            id: "7",
            name: "Plant ",
            img: images.plant7
        },
    ])


    return (
        <View style={styles.container}>
            {/* New Plan  */}
            <View style={styles.newPlanSection}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        ...FONTS.h2,
                        color: COLORS.white
                    }}>New Plants</Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log("Focus on press")
                        }}
                    >
                        <Image style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain"
                        }} source={icons.focus} /></TouchableOpacity>
                </View>

                <View style={{
                    flex:1
                }}>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={newPlants}
                        keyExtractor={item=>item.id}
                        renderItem={({ item, index, separators }) => {
                            return <PlantItem key={item.id} item={item} />
                        }}
                    ></FlatList>

                </View>
            </View>
            {/* Today's Share  */}
            <View style={styles.todayShareSection}></View>
            {/* Add Friend */}
            <View style={styles.addFriendSection}></View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    newPlanSection: {
        height: "30%",
        backgroundColor: COLORS.green,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
    },
    todayShareSection: {
        height: "50%"
    },
    addFriendSection: {
        height: "20%"
    },
    plantItem: {
        flex:1,
        margin: 5,
         justifyContent:"center"
        
    },
    plantItemImage: {

        width:SIZES.width*0.3,
        borderRadius: 15,
        resizeMode: "cover",
         height:"80%"
    },
    plantItemName: {
        position: "absolute",
        right: 0,
        bottom: "20%",
        paddingHorizontal: 10,
        paddingVertical:5,
        backgroundColor: COLORS.green,
        borderBottomLeftRadius:50, 
        borderTopLeftRadius:50, 
        color:COLORS.white
        
    }


}
)