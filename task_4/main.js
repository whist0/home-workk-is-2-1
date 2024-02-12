// const array = [ [34, 43], [56, 70] ];

// let summ = 0;

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++){
//         console.log(array[i][j]);
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     console.log(`кол-во элементов в ${i+1} массиве = ${array[i].length}`);
//     for (let j = 0; j < array[i].length; j++) {
//         summ += array[i][j];
//     }
// }
// console.log(`Сумма элементов массива = ${summ}.`);


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
