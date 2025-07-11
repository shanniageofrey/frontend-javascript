interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const student1: Student = {
    firstName: "Azura",
    lastName: "Abole",
    age:23,
    location: "Tanzania"
}

const student2: Student = {
    firstName: "Amara",
    lastName: "Timothy",
    age:20,
    location: "Eretria"
}

const studentList: Student[]= [student1, student2];

const table = document.createAttribute("table");

