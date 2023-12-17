import React from "react";
import { View } from "react-native";

import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      {/* <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("./app/assests/jacket.jpg")}
      /> */}
      <ListingDetailsScreen />
    </View>
  );
}
