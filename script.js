//                      LESSON 1

// let studnets = ["Shaxboz", ["Alibek", "Bexruz"], "Jaxongir", "Radmir", "Abdumanon", "Alsafir"]

// "Hello my name is Shaxboz but everybody calls me duvoshnik"

// let randomized = ["me", 15, true, "Hello my", 9999, ['is', 'name', ['Shaxboz but']], "dvoishnik", ['everybody calls']]

// console.log(
//     randomized[3] + " " + randomized[5][1] + " " + randomized[5][0] + " " + randomized[5][2][0] + " " + randomized[7] + " " +
//     randomized[0] + " " + randomized[6]
// );


// add
// studnets.push('alex')  -> добовляет в конец
// studnets.unshift('alex')  -> добовляет в начало

// delete
// studnets.pop()  -> удаляет с конца 
// studnets.shift()  -> удаляет с начало 
// studnets.splice(2,1, "boleet") 

// // search 
// let idx = studnets.indexOf("Rdasdasadmir")

// let students = ["Shaxboz", "Alibek", "Bexruz", "Jaxongir", "Radmir", "Abdumanon", "Alsafir"]
// let nameToremove = prompt('')
// let inx = students.indexOf(nameToremove)
// students.splice(ind, 1)

// console.log(
//     students, ind
// );
// indexOf
// splice


//                          LESSON 2

// let finded = students.map((name) => name[0] === "A")
// let finded = students.find((name) => name[0] === "A")
// let finded = students.filter((name) => name[0].toLowerCase() === 'a')
// let numbers = arr.filter(item => typeof (item) === 'number')

// let arr = [1, 2, 3, 4, 5, 6]
// let evens = arr.filter(item => item % 2 === 0)

// console.log(evens);


// let students = ["Shaxboz", "Alibek", "Bexruz", "Jaxongir", "Radmir", "Abdumanon", "Alsafir", "Hasan"]
// let lab = ""

// students.filter(name => {
//     if (name.length > lab.length) {
//         lab = name
//     }
// })
// console.log(lab);


//            LESSON 2 HOMEWORK
// let people = ["Shaxboz", "Alibek", "Bexruz", "Jaxongir", "Radmir", "Abdumanon", "Alsafir", "Hasan"];
// let even = [];
// let odd = [];

// for (let n = 0; n < people.length; n++) {
//     if (n % 2 === 0) {
//         even.push(people[n])
//     } else {
//         odd.push(people[n])
//     }
// }
// console.log("Четные имена:", even);
// console.log("Нечетные имена:", odd);


let people = ["Shaxboz", "Alibek", "Bexruz", "Jaxongir", "Radmir", "Abdumanon", "Alsafir", "Hasan"];
let even = [];
let odd = [];

for (let item = 0; item < people.length; item++) {
    let name = people[item];
    let letterCount = name.length;
    if (letterCount % 2 === 0) { 
        even.push(name)
    }  else {
        odd.push(name)
    }
}

console.log("Четные имена:", even);
console.log("Нечетные имена:", odd);




let arr = [2, 1, 1, 9, 22, 7, 38, 14, 24, 3, 6, 8, 10]
let total = 0

arr.sort((a, b) => a - b);

for (let num = 0; num < arr.length; num++) {
    total += arr[num];
}

console.log("Отсортированный массив:", arr);
console.log("Сумма всех чисел в массиве:", total);

