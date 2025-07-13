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

const table = document.createElement("table");

table.style.border = "1px solid black";

// Add rows for each student
studentList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "4px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "4px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);