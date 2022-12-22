import { Sorter } from "./sorter";
import { CharactersCollection } from "./charactersCollection";
import { NumbersCollection } from "./numbersCollection";

const numbersCollection = new NumbersCollection([4, 6, 2, 0, -4]);
const charactersCollection = new CharactersCollection('bsksbvkbsfhbhbbubwhbciybcwbvi');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);