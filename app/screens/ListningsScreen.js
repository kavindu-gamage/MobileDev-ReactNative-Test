import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../componenets/Card";
import Screen from "../componenets/Screen";
import colors from "../config/colors";

const listnings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assests/jacket.jpg"),
  },
  {
    id: 1,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assests/couch.jpg"),
  },
];

function ListningsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listnings}
        keyExtractor={(listning) => listning.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListningsScreen;
