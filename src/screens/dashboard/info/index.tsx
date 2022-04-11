import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Info: React.FC = () =>
  // realtime reporting TS error
  // const a: string = "a";
  // const num: number = "num";
  (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
export default Info;



//LEARN Typescript Basics: Object Types

//note interface as Object Type
//In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
//As we've seen, they can be anonymous:
function greet(person: {
  name: string;
  age: number
})
{
  return "Hello " + person.name;
}

////or they can be named by using either an interface as Object Type
interface InterfacePerson {
  name: string;
  age: number;
}
const greetThere = (person: InterfacePerson) => {
  return "Hello " + person.name;
}
