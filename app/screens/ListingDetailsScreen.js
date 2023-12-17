import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../componenets/AppText";
import ListItem from "../componenets/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assests/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assests/kavindu.png")}
            title="Kavindu Gamage"
            subTitle="5 Listenings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 5000,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
