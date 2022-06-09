import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from "@react-navigation/native"
import { COLORS, FONTS, icons, images, SIZES } from "../../consts"

export const RequirementItem = ({ item }) => {
  return <View style={{
    marginRight: SIZES.padding / 2,

  }}>
    <View style={{
      padding: SIZES.padding / 2,
      borderRadius: SIZES.radiusSmall,
      borderColor: COLORS.gray,
      borderWidth: 1,
      marginBottom: SIZES.padding / 3

    }}>
      <Image style={{
        width: 30,
        height: 30,
        tintColor: COLORS.gray
      }} source={item.icon} />



    </View>
    {/* Bar  */}
    <View style={{
      width: "100%",
      height: 3,
      backgroundColor: COLORS.gray,
      borderRadius: SIZES.radiusBase,
    }}>
      <View
        style={{
          width: item.percent,
          height: "100%",
          position: "absolute",
          backgroundColor: COLORS.green,
          borderRadius: SIZES.radiusBase,
        }}
      >


      </View>
    </View>
  </View>
}


export default function PlantDetail() {
  const route = useRoute();
  const { id } = route.params;
  const [requireItems, setRequireItem] = useState([
    {
      id: "1",
      icon: icons.sun,
      percent: "50%",
      name: "Sunlight",
      content: '15oC'
    },
    {
      id: "2",
      icon: icons.drop,
      percent: "70%",
      name: "Water",
      content: '250 ML Daily'


    }, {
      id: "3",
      icon: icons.temperature,
      percent: "25%",
      name: "Rom Temp",
      content: '25oC'


    }, {
      id: "4",
      icon: icons.garden,
      percent: "10%",
      name: "Soil",
      content: '3 Kg'


    },
    {
      id: "5",
      icon: icons.seed,
      percent: "50%",
      name: "Fertilizer",
      content: '150 Mg'
    },
  ])
  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={styles.bannerPhoto}>
        <Image style={{
          width: "100%",
          height: "100%",
        }} resizeMode='cover' source={images?.bannerBG} />
      </View>
      {/* Requirements */}
      <View
        style={styles.requirements}
      >
        <View><Text style={{ ...FONTS.h2, marginBottom: SIZES.padding }}>Requirements</Text></View>
        <View style={{
          flexDirection: "row"
        }}>{
            requireItems?.map((item) => {

              return < RequirementItem item={item} />
            })
          }</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerPhoto: {
    height: '35%',

  },
  requirements: {
    flex: 1,
    marginTop: -40,
    backgroundColor: COLORS.lightGray,
    borderTopStartRadius: SIZES.radiusLarge,
    borderTopRightRadius: SIZES.radiusLarge,
    padding: SIZES.padding
  }
})