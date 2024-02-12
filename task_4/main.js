// const teachers = [ [34, 43], [56, 70] ];

// for (let item of teachers) {
//     console.log(item);
// }

// let sum = 0;
// for (let item of teachers) {
//     for (let element of teachers) {
//         sum += element;
//     }
// }
// console.log("сумма всех элементов двумерного массива:", sum);

// for (let item of teachers) {
//     console.log("элементов во вложенном массиве:", teachers.length);
// }


// const users = [
//     { name: 'Alice', age: 25, city: 'New York' },
//     { name: 'Anna', age: 14, city: 'Moscow' },
//     { name: 'Lisa', age: 35, city: 'Minsk' }
// ];

// for (let user of users) {
//     let age = user.age
//     console.log(age);
// }

// for (let user of users) {
//     user.age += 1
//     console.log(user);
// }


const companies = {
    companyA: {
        employees: ['Mariya', 'Ivan']
    },
    companyB: {
        employees: ['Bob', 'Dan']
    },
    companyC: {
        employees: ['Eve', 'Steve']
    }
};

for (let company in companies) {
    console.log(`Сотрудники компании ${company}:`);
    for (let i = 0; i < companies[company].employees.length; i++) {
        console.log(companies[company].employees[i]);
    }
    console.log("============")
}
