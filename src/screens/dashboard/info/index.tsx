import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Info: React.FC = () => {
const a: string = "a";
const num: number = "num";
  return (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
};

export default Info;
