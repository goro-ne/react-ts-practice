/** TypeScripeの基本型 **/

// boolean
const bool: boolean = true;

// number
const num: number = 0;

// string
const str: string = 'aaa';

// Array
const arr1: Array<number> = [0, 1, 2];
// Array
const arr2: number[] = [0, 1, 2];

// tupple
const tuple: [number, string] = [0, 'a'];

// any
const any1: any = true;

// void
const func1A = () => {
  const test = 'TEST';
};

// null
let null1: null = null;

// undefind
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 1, name: 'Sample' };
let obj３: Partial<{ id: number, name: string }> = {};

