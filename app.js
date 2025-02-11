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

// console.time("a")
// i = 0
// for (i = 0; i < 100; i++){
//     i++
//     console.log('i' , i);
//     document.writeln( i , '<br />');
// }
// console.timeEnd("a")

// const date = {
//     myName: 'Structured Clone',
//     date: new Date(),
//     map: new Map([['key', 'value']]),
//     set: new Set([1, 2, 3]),
// }

// const copy = structuredClone(date)
// console.log(copy.date === date.date);
// console.log(copy.map === date.map);
// console.log(copy.set.has(1));


// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const userPost = await getDocs(collection(db, "blogs"));

//         const card2 = document.querySelector("#card2");
//         card2.innerHTML = ""
//         // if(!data.isPrivate){

//         userPost.forEach((doc) => {
//             const data = doc.data();
//             const id = doc.id;

//             card2.innerHTML += `

//         <div class="card mb-4 p-3">
//         <div class="card-body">
//           <h2 class="card-title text-info">${data.title || "No Title"}</h2>
//           <p class="card-text">${data.text || "No Content Available"}</p>
//           <p class="card-id">ID: ${id}</p>
//         </div>
//       </div>
//          `;

//         }
//         )
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// var arr = [1, 2, 3, 4]
// // console.log(arr.length)

// for (let i = 0; i < arr.length; i++) {
//     // if (arr.length === 4) {
//         const element = arr[i];
//         // console.log(i)
//         console.log(element)
//     // } else {
//     //     console.log('something went wrong')

//     // }
// }

// let a = 1;
// let b = (a++, a + 1)
// console.log(a)
// console.log(b)

let arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log('element' , element)
    console.log('index' , i)
    console.log('element Index ', element * i)
}