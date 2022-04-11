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



//LEARN Modules
/*
JavaScript has a long history of different ways to handle modularizing code. TypeScript having been around since 2012, has implemented support for a lot of these formats, but over time the community and the JavaScript specification has converged on a format called ES Modules (or ES6 modules). You might know it as the import/export syntax.

ES Modules was added to the JavaScript spec in 2015, and by 2020 had broad support in most web browsers and JavaScript runtime.

For focus, the handbook will cover both ES Modules and its popular pre-cursor CommonJS module.exports = syntax, and you can find information about the other module patterns in the reference section under Modules.
*/

//note How JavaScript Modules are Defined
/*In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.

Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

Modules are executed within their own scope, not in the global scope. This means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.*/

//note Non-modules
/*Before we start, it's important to understand what TypeScript considers a module. The JavaScript specification declares that any JavaScript files without an export or top-level await should be considered a script and not a module.

Inside a script file variables and types are declared to be in the shared global scope, and it's assumed that you'll either use the outFile compiler option to join multiple input files into one output file, or use multiple <script> tags in your HTML to load these files (in the correct order!).*/

//If you have a file that doesn't currently have any imports or exports, but you want to be treated as a module, add the line:
export {};

//which will change the file to be a module exporting nothing. This syntax works regardless of your module target.

//learn Modules in TypeScript
//There are three main things to consider when writing module-based code in TypeScript:

//=>Syntax: What syntax do I want to use to import and export things?

//=>Module Resolution: What is the relationship between module names (or paths) and files on disk?

//=>Module Output Target: What should my emitted JavaScript module look like?

//note ES Module Syntax ==> Export default
/*
//A file can declare a main export via export default:
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
export default helloWorld;

//This is then imported IN other files via:
import helloWorld from "./hello.js";
helloWorld();
*/

//note Export And create instance
//In addition to the default export, you can have more than one export of variables and functions via the export by omitting default:

// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator {}

/*
//These can be used in another file via the import syntax:
////IN other files:
import { pi, phi, absolute } from "./maths.js";

console.log(pi);
const absPhi = absolute(phi);
      //const absPhi: number
*/

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}

/*
//You can mix and match the above syntax into a single import:

// @filename: maths.ts
export const pi = 3.14;
export default class RandomNumberGenerator {}

// @filename: app.ts
import RandomNumberGenerator, { pi as π } from "./maths.js";

RandomNumberGenerator;
//(alias) class RandomNumberGenerator

import RandomNumberGenerator

console.log(π);
//(alias) const π: 3.14
//import π
*/
/*
//You can take all of the exported objects and put them into a single namespace using * as name:

// @filename: app.ts
import * as math from "./maths.js";

console.log(math.pi);
const positivePhi = math.absolute(math.phi);
    //const positivePhi: number
*/
/*
//You can import a file and not include any variables into your current module via import "./file":

// @filename: app.ts
import "./maths.js";

console.log("3.14");
*/

//In this case, the import does nothing. However, all of the code in maths.ts was evaluated, which could trigger side-effects which affect other objects.

//note TypeScript Specific ES Module Syntax

/*
//Types can be exported and imported using the same syntax as JavaScript values:

// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

// @filename: app.ts
import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
*/
/*
//TypeScript has extended the import syntax with two concepts for declaring an import of a type:

//note import type

//Which is an import statement which can only import types:

// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
    //'createCatName' cannot be used as a value because it was imported using 'import type'.
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";

// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;

// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName();
*/
/*
//note Inline type imports
//TypeScript 4.5 also allows for individual imports to be prefixed with type to indicate that the imported reference is a type:
// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";

export type Animals = Cat | Dog;
const name = createCatName();

//Together these allow a non-TypeScript transpiler like Babel, swc or esbuild to know what imports can be safely removed.
*/
/*
//note ES Module Syntax with CommonJS Behavior
//TypeScript has ES Module syntax which directly correlates to a CommonJS and AMD require.
//Imports using ES Module are for most cases the same as the require from those environments, but this syntax ensures you have a 1 to 1 match in your TypeScript file with the CommonJS output:

import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");

//You can learn more about this syntax in the modules reference page.
*/


//learn CommonJS Syntax
//CommonJS is the format which most modules on npm are delivered in. Even if you are writing using the ES Modules syntax above, having a brief understanding of how CommonJS syntax works will help you debug easier.

//note Exporting

//Identifiers are exported via setting the exports property on a global called module.

function absolutely(num: number) {
  if (num < 0) return num * -1;
  return num;
}

module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolutely,
};

//Then these files can be imported via a require statement:
const maths = require("maths");
maths.pi;
      //any

//Or you can simplify a bit using the destructuring feature in JavaScript:

const { squareTwo } = require("maths");
squareTwo;
    //const squareTwo: any

//note CommonJS and ES Modules interop
//There is a mis-match in features between CommonJS and ES Modules regarding the distinction between a default import and a module namespace object import.
//TypeScript has a compiler flag to reduce the friction between the two different sets of constraints with esModuleInterop.
