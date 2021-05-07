// Read, Write, Execute
// 00000100
// 00000110
// 00000111

const readPermission = 4;    // 000000100
const writePermission = 2;   // 000000010
const executePermission = 1; // 000000001

let myPermission = 0;

myPermission = myPermission | readPermission | writePermission;

// console.log(myPermission);

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);
