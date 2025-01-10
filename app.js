// var v1 = 5,
//     v2 = 1
// var obj = { v1: 10 }
// console.log(v2)

// function abc() {
//     // return console.log('abc')
//     let a = 1;
//     let b = "1";
//     if (a.toString() === b) return true; else return false;
// }
// console.log(abc())

console.time("a")
i = 0
for (i = 0; i < 100; i++){
    i++
    console.log('i' , i);
    document.writeln( i , '<br />');
}
console.timeEnd("a")