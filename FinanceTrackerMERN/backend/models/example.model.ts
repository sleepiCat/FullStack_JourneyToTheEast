import mongoose, {Schema, Document, Types } from 'mongoose';

interface TGeneric {
    name: string;
    age: number;
}

// does this need to be be separated into type declaration and function declaration?
function person<TGeneric extends number> (args: TGeneric) : number {
    return args;
}
// function person(args) {
//     return args;
// }
type RefType = number | string | Buffer | undefined | Types.ObjectId | typeof Schema.Types.Number;

const a : RefType = 1;

const b : RefType = '1';

console.log(person({name: "Tim", age: 300}))
console.log(a, b);

interface Nested {
    id: number;
    info: {
        name: string;
        age: number;
    }
}

type FlattenPropertyUtility<T> = T extends object ? { [P in keyof T]: T[P] } : T;
type FlattenMaps<T> = {
    [P in keyof T] : FlattenPropertyUtility <T[P]>
}

// usage

const aa: FlattenMaps<Nested> = {
    id: 1,
    info: {
        name: "Tim",
        age: 300
    }
}

console.log(aa);