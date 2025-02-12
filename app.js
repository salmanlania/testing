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

// let arr = [1, 2, 3, 4, 5, 6]
// let i;
// let element;
// for (i = 0; i < arr.length; i++) {
//     element = arr[i];
//     console.log('element' , element)
//     console.log('index' , i)
//     console.log('element Index ', element * i)
// }
// console.log('loop' , i)
// console.log('loop element' , element)

// let arr = [{
//     name: 'John',
//     age: 20,
//     occupation: 'Developer',
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//     },
//     teamMembers: [
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//     ]
// },
// {
//     name: 'Jane',
//     age: 25,
//     occupation: 'Teacher',
//     address: {
//         street: '456 Elm St',
//         city: 'Othertown',
//         state: 'NY',
//     },
//     teamMembers: [
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//     ]
// },
// {
//     name: 'Bob',
//     age: 30,
//     occupation: 'Engineer',
//     address: {
//         street: '789 Oak St',
//         city: 'Thistown',
//         state: 'TX',
//     },
//     teamMembers: [
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//         {
//             name: 'Jane',
//             age: 25,
//             occupation: 'Teacher',
//             address: {
//                 street: '456 Elm St',
//                 city: 'Othertown',
//                 state: 'NY',
//             },
//         },
//     ]
// },
// ]
// arr.forEach((item) => {
//     console.log(item.name)
//     console.log(item.age)
//     console.log(item.occupation)
//     console.log(item.address.street)
//     console.log(item.address.city)
//     console.log(item.address.state)
//     item.teamMembers.forEach((member) => {
//         console.log(member.name)
//         console.log(member.age)
//         console.log(member.occupation)
//         console.log(member.address.street)
//         console.log(member.address.city)
//         console.log(member.address.state)
//     })
// })
const arr = [1, 2, 3];

arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;
console.log(arr.length);
console.log(arr);