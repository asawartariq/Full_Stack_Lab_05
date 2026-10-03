// JavaScript statement
let message = "JavaScript is working correctly";
// Display result on webpage
document.getElementById("syntaxOutput").textContent =
    message;

var studentName = "Ali";
let semester = 5;
const university = "Air University";


// Display variables
document.getElementById("variableOutput").innerHTML =
    "Student Name: " + studentName +
    "<br>Semester: " + semester +
    "<br>University: " + university;

/* =========================================
   3. HOISTING
========================================= */

// var is hoisted
console.log(hoistedVariable);

var hoistedVariable = "var is hoisted";


/*
   let is also hoisted internally,
   but it cannot be accessed before
   its declaration.

   The following code would produce
   a ReferenceError:

   console.log(letVariable);
   let letVariable = 10;
*/


document.getElementById("hoistingOutput").innerHTML =
    "Using var: <strong>" +
    hoistedVariable +
    "</strong>" +
    "<br><br>" +
    "The declaration of var is hoisted, " +
    "so it can be referenced before its declaration." +
    "<br><br>" +
    "let and const cannot be accessed before " +
    "their declaration.";


/* =========================================
   4. JAVASCRIPT OBJECT
========================================= */

// Create a student object

let student = {
    name: "Ahmed",
    age: 21,
    semester: 5,
    cgpa: 3.45,
    program: "BS Computer Science"
};
// Access object properties
document.getElementById("objectOutput").innerHTML =
    "Name: " + student.name +
    "<br>Age: " + student.age +
    "<br>Semester: " + student.semester +
    "<br>CGPA: " + student.cgpa +
    "<br>Program: " + student.program;

/* =========================================
   5. OPERATORS
========================================= */

// Variables

let a = 10;
let b = 3;


// Arithmetic operators

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;


// Comparison operators

let greater = a > b;
let equal = a === b;


// Logical operators

let logicalAnd = (a > 5 && b < 5);
let logicalOr = (a > 20 || b < 5);


document.getElementById("operatorOutput").innerHTML =

    "<strong>Arithmetic Operators</strong>" +

    "<br>" +
    a + " + " + b + " = " + addition +

    "<br>" +
    a + " - " + b + " = " + subtraction +

    "<br>" +
    a + " × " + b + " = " + multiplication +

    "<br>" +
    a + " / " + b + " = " + division +

    "<br>" +
    a + " % " + b + " = " + remainder +

    "<br><br>" +

    "<strong>Comparison Operators</strong>" +

    "<br>" +
    a + " > " + b + " = " + greater +

    "<br>" +
    a + " === " + b + " = " + equal +

    "<br><br>" +

    "<strong>Logical Operators</strong>" +

    "<br>" +
    "(a > 5 && b < 5) = " + logicalAnd +

    "<br>" +
    "(a > 20 || b < 5) = " + logicalOr;


/* =========================================
   6. CONDITIONS
========================================= */

let marks = 78;

let grade;
let status;


// if / else if / else

if (marks >= 80) {

    grade = "A";

}
else if (marks >= 70) {

    grade = "B";

}
else if (marks >= 60) {

    grade = "C";

}
else if (marks >= 50) {

    grade = "D";

}
else {

    grade = "F";

}


// Determine pass/fail

if (marks >= 50) {

    status = "Passed";

}
else {

    status = "Failed";

}


// Display result

document.getElementById("conditionOutput").innerHTML =

    "Student Marks: " + marks +
    "<br>Grade: " + grade +
    "<br>Status: " + status;


/* =========================================
   7. COMBINED STUDENT RESULT
========================================= */

// Student object

let resultStudent = {

    name: "Sara",
    assignment: 18,
    midterm: 22,
    finalExam: 42

};


// Calculate total using arithmetic operator

let total =
    resultStudent.assignment +
    resultStudent.midterm +
    resultStudent.finalExam;


// Determine grade using conditions

let resultGrade;

if (total >= 80) {

    resultGrade = "A";

}
else if (total >= 70) {

    resultGrade = "B";

}
else if (total >= 60) {

    resultGrade = "C";

}
else if (total >= 50) {

    resultGrade = "D";

}
else {

    resultGrade = "F";

}


// Display complete result

document.getElementById("resultOutput").innerHTML =

    "Student: " + resultStudent.name +

    "<br>Assignment: " +
    resultStudent.assignment +

    "<br>Midterm: " +
    resultStudent.midterm +

    "<br>Final Exam: " +
    resultStudent.finalExam +

    "<br><strong>Total Marks: " +
    total +
    "</strong>" +

    "<br><strong>Grade: " +
    resultGrade +
    "</strong>";



/* =====================================================
   LAB 04
   1. ARRAYS
===================================================== */

let lab04Students = [
    "Ali",
    "Ahmed",
    "Sara",
    "Ayesha"
];

document.getElementById("arrayOutput").innerHTML =

    "Students: " +
    lab04Students.join(", ") +

    "<br><br>" +

    "First Student: " +
    lab04Students[0] +

    "<br>" +

    "Second Student: " +
    lab04Students[1] +

    "<br>" +

    "Total Students: " +
    lab04Students.length;




   /* =====================================================
   2. ARRAY METHODS
===================================================== */

let lab04Courses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence"
];


// Add an item
lab04Courses.push("Computer Vision");


// Check whether an item exists
let lab04HasAI =
    lab04Courses.includes(
        "Artificial Intelligence"
    );


// Display result
document.getElementById(
    "arrayMethodsOutput"
).innerHTML =

    "Courses: " +
    lab04Courses.join(", ") +

    "<br><br>" +

    "Total Courses: " +
    lab04Courses.length +

    "<br><br>" +

    "Artificial Intelligence exists: " +
    lab04HasAI;

/* =====================================================
   3. FOR LOOP
===================================================== */

let lab04ForLoopResult = "";

for (
    let i = 0;
    i < lab04Students.length;
    i++
) {

    lab04ForLoopResult +=

        "Student " +
        (i + 1) +
        ": " +
        lab04Students[i] +
        "<br>";
}


document.getElementById(
    "forLoopOutput"
).innerHTML =
    lab04ForLoopResult;


/* =====================================================
   4. FOR...OF LOOP
===================================================== */

let lab04ForOfResult = "";

for (
    let lab04Student of lab04Students
) {

    lab04ForOfResult +=
        lab04Student +
        "<br>";
}


document.getElementById(
    "forOfOutput"
).innerHTML =
    lab04ForOfResult;



/* =====================================================
   5. FOR...IN LOOP
===================================================== */

let lab04StudentInfo = {

    name: "Ahmed",
    age: 21,
    department: "Computer Science",
    semester: 6

};


let lab04ForInResult = "";


for (
    let lab04Key in lab04StudentInfo
) {

    lab04ForInResult +=

        lab04Key +
        ": " +
        lab04StudentInfo[lab04Key] +
        "<br>";
}


document.getElementById(
    "forInOutput"
).innerHTML =
    lab04ForInResult;





/* =====================================================
   6. FOREACH
===================================================== */

let lab04ForEachResult = "";


lab04Students.forEach(
    function(student, index) {

        lab04ForEachResult +=

            (index + 1) +
            ". " +
            student +
            "<br>";

    }
);


document.getElementById(
    "forEachOutput"
).innerHTML =
    lab04ForEachResult;



/* =====================================================
   7. FUNCTIONS
===================================================== */

function lab04CalculateTotal(
    assignment,
    midterm,
    finalExam
) {

    let total =
        assignment +
        midterm +
        finalExam;

    return total;
}


let lab04StudentTotal =
    lab04CalculateTotal(
        18,
        22,
        42
    );


document.getElementById(
    "functionOutput"
).innerHTML =

    "Assignment Marks: 18" +

    "<br>" +

    "Midterm Marks: 22" +

    "<br>" +

    "Final Exam Marks: 42" +

    "<br><br>" +

    "<strong>Total Marks: " +
    lab04StudentTotal +
    "</strong>";



/* =====================================================
   8. ARROW FUNCTIONS
===================================================== */

const lab04CalculateAverage =
    (mark1, mark2, mark3) => {

        return (
            mark1 +
            mark2 +
            mark3
        ) / 3;

    };


let lab04Average =
    lab04CalculateAverage(
        18,
        22,
        42
    );


document.getElementById(
    "arrowOutput"
).innerHTML =

    "Marks: 18, 22, 42" +

    "<br>" +

    "Average: " +

    lab04Average.toFixed(2);




/* =====================================================
   9. ES6 CLASS
===================================================== */

class Lab04Student {

    constructor(
        name,
        semester,
        cgpa
    ) {

        this.name = name;
        this.semester = semester;
        this.cgpa = cgpa;

    }


    getStatus() {

        if (this.cgpa >= 2.0) {

            return "Active";

        }
        else {

            return "Academic Warning";

        }

    }

}


let lab04StudentRecord =
    new Lab04Student(
        "Ahmed",
        6,
        3.45
    );


document.getElementById(
    "classOutput"
).innerHTML =

    "Name: " +
    lab04StudentRecord.name +

    "<br>" +

    "Semester: " +
    lab04StudentRecord.semester +

    "<br>" +

    "CGPA: " +
    lab04StudentRecord.cgpa +

    "<br>" +

    "Status: " +
    lab04StudentRecord.getStatus();

/* =====================================================
   10. OBJECT DESTRUCTURING
===================================================== */

const lab04StudentData = {

    name: "Sara",
    semester: 6,
    cgpa: 3.75

};


const {
    name: lab04Name,
    semester: lab04Semester,
    cgpa: lab04CGPA
} = lab04StudentData;


document.getElementById(
    "destructuringOutput"
).innerHTML =

    "Name: " +
    lab04Name +

    "<br>" +

    "Semester: " +
    lab04Semester +

    "<br>" +

    "CGPA: " +
    lab04CGPA;




/* =====================================================
   11. TERNARY OPERATOR
===================================================== */

const lab04Marks = 78;


const lab04Status =
    lab04Marks >= 50
        ? "Passed"
        : "Failed";


document.getElementById(
    "ternaryOutput"
).innerHTML =

    "Marks: " +
    lab04Marks +

    "<br>" +

    "Status: " +
    lab04Status;



/* =====================================================
   12. MAP(), FILTER() AND FIND()
===================================================== */

const lab04MarksList = [
    45,
    55,
    72,
    81,
    38
];

const lab04UpdatedMarks =
    lab04MarksList.map(
        mark => mark + 5
    );

const lab04PassedMarks =
    lab04MarksList.filter(
        mark => mark >= 50
    );

const lab04FirstHighMark =
    lab04MarksList.find(
        mark => mark >= 70
    );


document.getElementById(
    "advancedArrayOutput"
).innerHTML =

    "Original Marks: " +
    lab04MarksList.join(", ") +

    "<br><br>" +

    "After map() (+5): " +
    lab04UpdatedMarks.join(", ") +

    "<br><br>" +

    "Passed Marks using filter(): " +
    lab04PassedMarks.join(", ") +

    "<br><br>" +

    "First Mark >= 70 using find(): " +
    lab04FirstHighMark;



/* =====================================================
   12. FINAL STUDENT PERFORMANCE DASHBOARD
===================================================== */

const lab04StudentRecords = [

    {
        name: "Ali",
        semester: 6,
        marks: 82
    },

    {
        name: "Ahmed",
        semester: 5,
        marks: 67
    },

    {
        name: "Sara",
        semester: 6,
        marks: 91
    },

    {
        name: "Ayesha",
        semester: 4,
        marks: 48
    }

];


/* =====================================================
   GRADE CALCULATION FUNCTION
===================================================== */

function lab04CalculateGrade(marks) {

    if (marks >= 80) {

        return "A";

    }
    else if (marks >= 70) {

        return "B";

    }
    else if (marks >= 60) {

        return "C";

    }
    else if (marks >= 50) {

        return "D";

    }
    else {

        return "F";

    }

}

/* =====================================================
   STATUS USING ARROW FUNCTION + TERNARY
===================================================== */

const lab04GetStatus =
    marks =>
        marks >= 50
            ? "Passed"
            : "Failed";





/* =====================================================
   CREATE DASHBOARD
===================================================== */

let lab04DashboardOutput = "";

lab04StudentRecords.forEach(
    student => {

        const {
            name: lab04Name,
            semester: lab04Semester,
            marks: lab04StudentMarks
        } = student;


        const lab04Grade =
            lab04CalculateGrade(
                lab04StudentMarks
            );


        const lab04StudentStatus =
            lab04GetStatus(
                lab04StudentMarks
            );


        lab04DashboardOutput +=

            "<div class='border rounded p-3 mb-3'>" +

                "<h5>" +
                    lab04Name +
                "</h5>" +

                "<p>" +

                    "<strong>Semester:</strong> " +
                    lab04Semester +

                    "<br>" +

                    "<strong>Marks:</strong> " +
                    lab04StudentMarks +

                    "<br>" +

                    "<strong>Grade:</strong> " +
                    lab04Grade +

                    "<br>" +

                    "<strong>Status:</strong> " +
                    lab04StudentStatus +

                "</p>" +

            "</div>";

    }
);



/* =====================================================
   DISPLAY DASHBOARD
===================================================== */

document.getElementById(
    "studentDashboardOutput"
).innerHTML =
    lab04DashboardOutput;


/* =====================================================
   LAB 04 TASKS
   TASK 1 - UNIVERSITY STUDENT MANAGEMENT SYSTEM
===================================================== */

// Array of student objects
let task1Students = [
    { name: "Ali", rollNumber: "BSCS-001", department: "Computer Science", semester: 6, cgpa: 3.45 },
    { name: "Ahmed", rollNumber: "BSCS-002", department: "Computer Science", semester: 5, cgpa: 2.80 },
    { name: "Sara", rollNumber: "BSCS-003", department: "Software Engineering", semester: 6, cgpa: 3.75 },
    { name: "Ayesha", rollNumber: "BSCS-004", department: "Artificial Intelligence", semester: 4, cgpa: 2.30 },
    { name: "Usman", rollNumber: "BSCS-005", department: "Cyber Security", semester: 3, cgpa: 1.85 },
    { name: "Fatima", rollNumber: "BSCS-006", department: "Data Science", semester: 2, cgpa: 3.10 }
];

// Function: academic status
function getAcademicStatus(cgpa) {
    if (cgpa >= 3.00) {
        return "Excellent";
    }
    else if (cgpa >= 2.50) {
        return "Good";
    }
    else if (cgpa >= 2.00) {
        return "Satisfactory";
    }
    else {
        return "Academic Warning";
    }
}

// Arrow function + ternary: eligibility
const checkEligibility = cgpa => cgpa >= 2.00 ? "Eligible" : "Not Eligible";

let task1Result = "<div class='row'>";

// forEach + destructuring
task1Students.forEach(function (student) {

    const { name, rollNumber, department, semester, cgpa } = student;

    task1Result +=
        "<div class='col-md-6 mb-3'>" +
            "<div class='card h-100'>" +
                "<div class='card-body'>" +
                    "<h5 class='card-title'>" + name + "</h5>" +
                    "Roll No: " + rollNumber + "<br>" +
                    "Department: " + department + "<br>" +
                    "Semester: " + semester + "<br>" +
                    "CGPA: " + cgpa.toFixed(2) + "<br>" +
                    "Status: " + getAcademicStatus(cgpa) + "<br>" +
                    "Eligibility: " + checkEligibility(cgpa) +
                "</div>" +
            "</div>" +
        "</div>";
});

task1Result += "</div>";

document.getElementById("task1Output").innerHTML = task1Result;



/* =====================================================
   TASK 2 - ONLINE COURSE REGISTRATION SYSTEM
===================================================== */

// Courses array
let courses = [
    "Web Development",
    "Database Systems",
    "Artificial Intelligence",
    "Computer Networks",
    "Software Engineering",
    "Data Structures"
];

// Display all courses using for...of
let task2Result = "<strong>Available Courses</strong><br>";
let courseNumber = 1;

for (let course of courses) {
    task2Result += courseNumber + ". " + course + "<br>";
    courseNumber++;
}

// Add a course
courses.push("Mobile App Development");

// Remove the last course
let removedCourse = courses.pop();

// Check if AI course exists
let hasAI = courses.includes("Artificial Intelligence") ? "Yes" : "No";

// Function: total courses
function countCourses(list) {
    return list.length;
}

// Arrow function + ternary: full-time or part-time
const getStudentType = count => count >= 4 ? "Full-Time" : "Part-Time";

let totalCourses = countCourses(courses);

// Display final list using forEach
task2Result += "<br><strong>Final Course List</strong><br>";

courses.forEach(function (course, index) {
    task2Result += (index + 1) + ". " + course + "<br>";
});

task2Result +=
    "<br>Added with push(): Mobile App Development" +
    "<br>Removed with pop(): " + removedCourse +
    "<br><br>Total Registered Courses: " + totalCourses +
    "<br>Artificial Intelligence Available: " + hasAI +
    "<br>Student Status: " + getStudentType(totalCourses);

document.getElementById("task2Output").innerHTML = task2Result;



/* =====================================================
   TASK 3 - STUDENT EXAMINATION AND RESULT SYSTEM
===================================================== */

let examStudents = [
    { name: "Sara", rollNumber: "BSCS-023", assignment: 18, midterm: 22, finalExam: 42 },
    { name: "Ali", rollNumber: "BSCS-001", assignment: 17, midterm: 20, finalExam: 38 },
    { name: "Ahmed", rollNumber: "BSCS-002", assignment: 15, midterm: 18, finalExam: 32 },
    { name: "Ayesha", rollNumber: "BSCS-004", assignment: 12, midterm: 15, finalExam: 28 },
    { name: "Usman", rollNumber: "BSCS-005", assignment: 8, midterm: 10, finalExam: 20 }
];

// Function: total marks
function calculateTotal(assignment, midterm, finalExam) {
    return assignment + midterm + finalExam;
}

// Arrow function: average
const calculateAverage = (assignment, midterm, finalExam) => (assignment + midterm + finalExam) / 3;

// Function: grade (also used in Task 4)
function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

let task3Result = "";

// forEach + destructuring
examStudents.forEach(function (student) {

    const { name, rollNumber, assignment, midterm, finalExam } = student;

    let studentTotal = calculateTotal(assignment, midterm, finalExam);
    let studentAverage = calculateAverage(assignment, midterm, finalExam);
    let passStatus = studentTotal >= 50 ? "Passed" : "Failed";

    task3Result +=
        "<div class='border rounded p-3 mb-3'>" +
            "<strong>Student: " + name + "</strong><br>" +
            "Roll No: " + rollNumber + "<br>" +
            "Assignment: " + assignment + "<br>" +
            "Midterm: " + midterm + "<br>" +
            "Final Exam: " + finalExam + "<br>" +
            "Total: " + studentTotal + "<br>" +
            "Average: " + studentAverage.toFixed(2) + "<br>" +
            "Grade: " + getGrade(studentTotal) + "<br>" +
            "Status: " + passStatus +
        "</div>";
});

// for loop: count passed students
let passedCount = 0;

for (let i = 0; i < examStudents.length; i++) {
    let s = examStudents[i];
    let marksTotal = calculateTotal(s.assignment, s.midterm, s.finalExam);

    if (marksTotal >= 50) {
        passedCount++;
    }
}

task3Result +=
    "<strong>Total Students: " + examStudents.length + "</strong><br>" +
    "<strong>Passed Students: " + passedCount + "</strong><br>" +
    "<strong>Failed Students: " + (examStudents.length - passedCount) + "</strong>";

document.getElementById("task3Output").innerHTML = task3Result;



/* =====================================================
   TASK 4 - STUDENT PERFORMANCE DASHBOARD
===================================================== */

// ES6 Class
class Student {
    constructor(name, rollNumber, department, semester, cgpa, marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.semester = semester;
        this.cgpa = cgpa;
        this.marks = marks;
    }
}

// Array of 6 objects made with the class
let dashboardStudents = [
    new Student("Ali", "BSCS-001", "Computer Science", 6, 3.45, 82),
    new Student("Ahmed", "BSCS-002", "Computer Science", 5, 2.80, 67),
    new Student("Sara", "BSCS-003", "Software Engineering", 6, 3.75, 91),
    new Student("Ayesha", "BSCS-004", "Artificial Intelligence", 4, 2.30, 74),
    new Student("Usman", "BSCS-005", "Cyber Security", 3, 1.85, 42),
    new Student("Fatima", "BSCS-006", "Data Science", 2, 3.10, 58)
];

// Arrow function + ternary: academic status
const getEligibility = cgpa => cgpa >= 2.0 ? "Eligible" : "Academic Warning";

// Array methods: push() and includes()
let departments = ["Computer Science", "Software Engineering", "Artificial Intelligence"];
departments.push("Data Science");
let hasCyber = departments.includes("Cyber Security") ? "Yes" : "No";

let task4Result = "<h5>Departments</h5>";

// for...of: show departments
for (let dept of departments) {
    task4Result += dept + "<br>";
}

task4Result += "Cyber Security in list: " + hasCyber + "<br><br>";

// for...in: show properties of one student
task4Result += "<h5>Object Information (first student)</h5>";

for (let key in dashboardStudents[0]) {
    task4Result += key + ": " + dashboardStudents[0][key] + "<br>";
}

// forEach + destructuring: student cards
task4Result += "<br><h5>Student List</h5><div class='row'>";

dashboardStudents.forEach(function (student) {

    const { name, rollNumber, department, semester, cgpa, marks } = student;

    task4Result +=
        "<div class='col-md-6 mb-3'>" +
            "<div class='card h-100'>" +
                "<div class='card-body'>" +
                    "<h5 class='card-title'>" + name + "</h5>" +
                    "Roll No: " + rollNumber + "<br>" +
                    "Department: " + department + "<br>" +
                    "Semester: " + semester + "<br>" +
                    "CGPA: " + cgpa.toFixed(2) + "<br>" +
                    "Marks: " + marks + "<br>" +
                    "Grade: " + getGrade(marks) + "<br>" +
                    "Status: " + getEligibility(cgpa) +
                "</div>" +
            "</div>" +
        "</div>";
});

task4Result += "</div>";

// for loop: dashboard statistics
let dashboardPassed = 0;

for (let i = 0; i < dashboardStudents.length; i++) {
    if (dashboardStudents[i].marks >= 50) {
        dashboardPassed++;
    }
}

task4Result +=
    "<h5>Final Dashboard Statistics</h5>" +
    "Total Students: " + dashboardStudents.length + "<br>" +
    "Passed Students: " + dashboardPassed + "<br>" +
    "Failed Students: " + (dashboardStudents.length - dashboardPassed);

// DOM manipulation
document.getElementById("task4Output").innerHTML = task4Result;
