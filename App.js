import React, { useState } from "react";
import { Switch } from "react-native";
import Screen from "./app/componenets/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);

  return (
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   {/* <Card
    //     title="Red Jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assests/jacket.jpg")}
    //   /> */}

    // </View>
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
