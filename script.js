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


// let people = ["Shaxboz", "Alibek", "Bexruz", "Jaxongir", "Radmir", "Abdumanon", "Alsafir", "Hasan"];
// let even = [];
// let odd = [];

// for (let item = 0; item < people.length; item++) {
//     let name = people[item];
//     let letterCount = name.length;
//     if (letterCount % 2 === 0) { 
//         even.push(name)
//     }  else {
//         odd.push(name)
//     }
// }

// console.log("Четные имена:", even);
// console.log("Нечетные имена:", odd);




// let arr = [2, 1, 1, 9, 22, 7, 38, 14, 24, 3, 6, 8, 10]
// let total = 0

// arr.sort((a, b) => a - b);

// for (let num = 0; num < arr.length; num++) {
//     total += arr[num];
// }

// console.log("Отсортированный массив:", arr);
// console.log("Сумма всех чисел в массиве:", total);


//                              LESSON 3 
// let arr = ['john',false, [], {}, true, 12, [], 90, 'alex', 19, 'alibek', true, 21, {}]
// let str = 0
// let bool = 0
// let num = 0
// let obj = 0

// arr.filter(item => {
//     if (typeof (item) === "number") {
//         num++
//     } else if (typeof (item) === "string") {
//         str++
//     } else if (typeof (item) === "boolean") {
//         bool++
//     } else if (typeof (item) === "object") {
//         obj++
//     }
// })

// console.log(str, bool, num, obj);


//                              LESSON 3 HOMEWORK
// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed": true 
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]
// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// const completedFilter = (item) => {
//     if (item.completed) {
//         a.count++;
//         a.arr.push(item);
//     } else {
//         b.count++;
//         b.arr.push(item);
//     }
// };

// arr.filter(completedFilter);

// console.log("Completed tasks (a):", a.arr);
// console.log("Number of completed tasks:", a.count);

// console.log("Incomplete tasks (b):", b.arr);
// console.log("Number of incomplete tasks:", b.count);



//                             LESSON 4
// let rubish = [1, 2, 3, 4, 0, '', {}, [], null, false, NaN, 'Alex', '   ', 16]
// let arr = rubish.filter(item => item)

// console.log(arr);


// let users = [
//     {
//         name: "Bexruz",
//         age: 16,
//         isMarried: false,
//         wifes: ['madina', 'yasmina', 'hasan']
//     },
//     {
//         name: "Abdumanon",
//         age: 13,
//         isMarried: true,
//         wifes: ['Alina']
//     },
//     {
//         name: "Radmir",
//         age: 16,
//         isMarried: false,
//         wifes: ['AlSafir', 'Hasan']
//     },
//     {
//         name: "AlSafir",
//         age: 15,
//         isMarried: true,
//         wifes: ['Amira', 'Amir']
//     },
//     {
//         name: "Hasan",
//         age: 15,
//         isMarried: true,
//         wifes: ['Alina', 'Alisher', 'Alibek']
//     },
//     {
//         name: "Alibek",
//         age: 16,
//         isMarried: true,
//         wifes: ['Alina', 'Jasmina']
//     },
// ]

// let average_age = 0
// let married = []
// let unmarried = []

// users.filter(item => {
//     if (item.isMarried) {
//         married.push(item)        
//     } else {
//         unmarried.push(item)
//     }
// })

// console.log("Married person:", married);
// console.log("Unmarried person:", unmarried);


//                                LESSON 4 HOMEWORK
let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
let emails = {
    org: [],
    net: [],
    info: []
}
let other = []


users.filter(item => {
    let m = item.email.split('.').at(-1)

    if (emails[m]) {
        emails[m].push(item)
    } else {
        other.push(item.email)
    }

    // if (m === 'org') {
    //     emails.org.push(item.email)
    // } else if (m === 'net') {
    //     emails.net.push(item.email)
    // } else if (m === 'info') {
    //     emails.info.push(item.email)
    // } else {
    //     other.push(item.email)
    // }
})

console.log("org:", "net:", "info:", emails);
console.log("Other emails:", other);


//                      LESSON 5
let Jaxongir = {
    personal: {
        name: "Jaxongir",
        surname: "Abdulaev",
        hands: 2,
        legs: 4,
        job: "Developer",
        city: {
            live: "Las Vegas",
            sport: {
                hobby: "MMA",
            },
        },
        married: {
            wife: true,
            girlfriend: "Asalya"
        },
    },
    stydy: {
        school: 33,
        grade: 11,
        language: "English",
        head: true,
        abroad: {
            wantToStaudy: "U.S.A"
        },
    },
    age: 17,
    year: 2006,
    sex: "male",
    birth: "3 september",
}



//                      LESSON 5 HOMEWORK
let cars = [{
    BMW: {
        compoany: "BMW",
        model: "m5 competition",
        price: 200000,
        year: 2023,
        details: {
            driveUnit: "full",
            color: "dark blue",
            engineCapacity: "5",
            horsePower: "885 л.с",
            maxSpeed: "380 km/h",
            acceleration: "0-100: 2,3 second",
            supercharger: "Biturbo",
            country: "Germany",
        }
    },
    Mercedes: {
        compoany: "Mercedes",
        model: "GT 63 S",
        price: 180000,
        year: 2022,
        details: {
            driveUnit: "full",
            color: "grey",
            engineCapacity: "4.4",
            horsePower: "780 л.с",
            maxSpeed: "360 km/h",
            acceleration: "0-100: 3,2 second",
            supercharger: "Twinturbo",
            country: "Germany",
        }
    },
    Porsche: {
        compoany: "Porsche",
        model: "Taycan",
        price: 165000,
        year: 2020,
        details: {
            driveUnit: "full",
            color: "white",
            engineCapacity: "4",
            horsePower: "755 л.с",
            maxSpeed: "350 km/h",
            acceleration: "0-100: 3,7 second",
            supercharger: "Turbo",
            country: "Germany",
        }
    },
    Audi: {
        compoany: "Audi",
        model: "RS7",
        price: 165000,
        year: 2018,
        details: {
            driveUnit: "full",
            color: "black",
            engineCapacity: "4",
            horsePower: "765 л.с",
            maxSpeed: "350 km/h",
            acceleration: "0-100: 3,5 second",
            supercharger: "Twinturbo",
            country: "Germany",
        }
    },
    Lamborghini: {
        compoany: "Lamborghini",
        model: "Huracan",
        price: 175000,
        year: 2016,
        details: {
            driveUnit: "full",
            color: "yellow",
            engineCapacity: "4.4",
            horsePower: "790 л.с",
            maxSpeed: "360 km/h",
            acceleration: "0-100: 3,1 second",
            supercharger: "Twinturbo",
            country: "Italy",
        }
    },
}]

let yearCar = 2023
let carNew = []

cars.forEach(item => {
    if (yearCar - item.year <= 2) {
        carNew.push(item)
    }
})

let askOne = +prompt('Max price')
let askTwo = +prompt('Min price')
let a = []

cars.forEach(item => {
    if(item.price >= askOne && item.price <= askTwo) {
        a.push(item)
    }
})

console.log(carNew);
console.log(a);


//                           LESSON 6 JS
// let car = {
//     compoany: "BMW",
//     model: "m5 competition",
//     price: 200000,
//     year: 2023,
//     details: {
//         driveUnit: "full",
//         color: "dark blue",
//         engineCapacity: "5",
//         horsePower: "885 л.с",
//         maxSpeed: "380 km/h",
//         acceleration: "0-100: 2,3 second",
//         supercharger: "Biturbo",
//         country: "Germany",
//     }
// }


// let person = {
//     firstName: 'Ali',
//     lastName: 'Aliev',
//     age: 17,
//     address: {
//         street: 'Gagarin',
//         city: 'Miami',
//         zipCode: '12345'
//     },
//     contacts: [
//         {
//             type: 'email',
//             value: 'aliev.ali@email.com'
//         },
//         {
//             type: 'phone',
//             value: '555-1234'
//         }
//     ]
// };

// let types = {
//     string: [],
//     number: [],
//     object: [],
//     boolean: []
// }

// let object = Object.assign({}, car, person);
// let key = Object.keys(object);
// let values = Object.values(key);
// let arr = key.concat(values)

// arr.filter(item => {
//     if (typeof (item) === "string") {
//         types.string.push(item)
//     } else if (typeof (item) === "number") {
//         types.number.push(item)
//     } else if (typeof (item) === "object") {
//         types.object.push(item)
//     } else if (typeof (item) === "boolean") {
//         types.boolean.push(item)
//     }
// })

// console.log(arr);


