import { Sorter } from "./sorter";
import { NumbersCollection } from "./numbersCollection";

const numbersCollection = new NumbersCollection([4, 6, 2, 0, -4]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);