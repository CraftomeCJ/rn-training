import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Info: React.FC = () =>
  // realtime reporting TS error
  const a: string = "a";
  const num: number = "num";
  (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
export default Info;

// TypeScript's type system only helps you during development
// (ie before the code gets compiled)
function add(n1,n2) {
  return n1 + n2;
}

const number1 = '5';
const number2  = 2.8;

const result = add(number1, number2);
console.log(result);
