import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Platform
} from 'react-native';
import React, { useState } from 'react';
import { SIZES, COLORS, icons, images, FONTS } from '../../consts';

export const PlantItem = ({ item }) => {
    return (
        <View style={styles.plantItem}>
            <Image style={styles.plantItemImage} source={item.img} />
            <View style={styles.plantItemName}>
                <Text style={[, { ...FONTS.body3, color: COLORS.white }]}>
                    {item.name}
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: 10,
                }}>
                <Image
                    style={{
                        // tintColor: COLORS.green,
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                    source={item?.favorite ? icons.heartRed : icons.heratGreenOutline}
                />
            </TouchableOpacity>
        </View>
    );
};
export default function Home() {
    const [newPlants, setNewPlants] = useState([
        {
            id: '1',
            name: 'Plant 1',
            img: images.plant1,
            favorite: false,
        },
        {
            id: '2',
            name: 'Plant 2',
            img: images.plant2,
            favorite: false,
        },
        {
            id: '3',
            name: 'Plant 3',
            img: images.plant3,
            favorite: true,
        },
        {
            id: '4',
            name: 'Plant 4',
            img: images.plant4,
        },
        {
            id: '5',
            name: 'Plant 5',
            img: images.plant5,
        },
        {
            id: '6',
            name: 'Plant 6',
            img: images.plant6,
        },
        {
            id: '7',
            name: 'Plant ',
            img: images.plant7,
        },
    ]);

    return (
        <View style={styles.container}>
            {/* New Plan  */}
            <View style={styles.newPlantSection}>
                <View style={styles.newPlantMain}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: SIZES.padding / 2
                        }}>
                        <Text
                            style={{
                                ...FONTS.h2,
                                color: COLORS.white,
                            }}>
                            New Plants
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('Focus on press');
                            }}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                    resizeMode: 'contain',
                                }}
                                source={icons.focus}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flex: 1,
                        }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={newPlants}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index, separators }) => {
                                return <PlantItem key={item.id} item={item} />;
                            }}></FlatList>
                    </View>
                </View>
            </View>
            {/* Today's Share  */}
            <View style={styles.todayShareSection}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: SIZES.padding
                    }}>
                    <Text
                        style={{
                            ...FONTS.h2,
                        }}>
                        Today's Share
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('See all on press');
                        }}>
                        <Text style={{ ...FONTS.body3 }}>See more</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{
                        flex: 1,
                        marginRight: SIZES.padding / 2


                    }}>
                        <View
                            style={{
                                flex: 1,
                                marginBottom: SIZES.padding / 2
                            }}
                        ><Image style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: SIZES.radiusMedium

                        }} source={images.plant5} /></View>
                        <View style={{
                            flex: 1,
                            marginTop: SIZES.padding / 2
                        }}>
                            <Image style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: SIZES.radiusMedium
                            }} source={images.plant6} />
                        </View>

                    </View>
                    <View
                        style={{
                            flex: 1,
                            marginLeft: SIZES.padding / 2,

                        }}
                    ><Image style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SIZES.radiusMedium

                    }} source={images.plant7} /></View>
                </View>
            </View>

            {/* Add Friend */}
            <View style={styles.addFriendSection}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
    },
    newPlantSection: {
        height: '30%',
        backgroundColor: COLORS.white,
    },
    newPlantMain: {
        flex: 1,
        backgroundColor: COLORS.green,
        borderBottomLeftRadius: SIZES.radiusMedium,
        borderBottomRightRadius: SIZES.radiusMedium,
        paddingTop: Platform.OS === 'IOS' ? SIZES.padding * 2 : SIZES.padding / 2,
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding,
    },
    plantItem: {
        flex: 1,
        marginRight: SIZES.padding,
        justifyContent: 'center',
    },
    plantItemName: {
        position: 'absolute',
        right: 0,
        bottom: '20%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: COLORS.green,
        borderBottomLeftRadius: SIZES.radiusMedium,
        borderTopLeftRadius: SIZES.radiusMedium,
        color: COLORS.white,
    },
    todayShareSection: {
        height: '50%',
        backgroundColor: COLORS.white,
        borderBottomLeftRadius: SIZES.radiusMedium,
        borderBottomRightRadius: SIZES.radiusMedium,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding,
    },
    addFriendSection: {
        height: '20%',
    },

    plantItemImage: {
        width: SIZES.width * 0.3,
        borderRadius: 15,
        resizeMode: 'cover',
        height: '100%',
    },
});
