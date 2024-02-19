const vacancy = {
    companyName: "Awesome Company",
    position: "Frontend Разработчик",
    requirements: "Опыт работы с HTML, CSS и JavaScrip",
    conditions: "Гибкий график работы, возможность работы из дома, медицинская страховка",
    salary: 3750000, // в руб за год
};

for (let i in vacancy) {
    console.log(`${i}: ${vacancy[i]}`);
}

if (vacancy.salary >= 3750000) {
    console.log("Эта зарплата очень привлекательная!");
} else {
    console.log("Эта зарплата могла бы быть более привлекательной.");
}