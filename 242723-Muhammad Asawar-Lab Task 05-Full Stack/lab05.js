import formatStudentResult, {
    DEPARTMENT_NAME,
    calculateTotal,
    calculateAverage,
    getGrade,
    getStatus as checkStatus
} from "./studentUtils.js";


// =========================
// TASK 1: Spread, Rest and ES6
// =========================

const coreCourses = [
    "Web Development",
    "Database Systems",
    "Software Engineering"
];

const electiveCourses = [
    "Artificial Intelligence",
    "Cyber Security",
    "Cloud Computing"
];

const student = {
    name: "Ali",
    rollNumber: "BSCS-001",
    department: "Computer Science",
    semester: 5
};

const cgpas = [3.1, 3.4, 3.2, 3.6, 3.5];

// Merge arrays using spread
const allCourses = [...coreCourses, ...electiveCourses];

// Copy array using spread
const copiedCourses = [...allCourses];

// Add course only to copied array
copiedCourses.push("Mobile App Development");

// Update student using object spread
const updatedStudent = {
    ...student,
    semester: 6,
    cgpa: 3.6
};

// Rest parameter
function enrollStudent(name, ...courses) {
    return `${name} is enrolled in ${courses.length} courses: ${courses.join(", ")}`;
}

// Arrow function with rest parameter
const calculateAverageCGPA = (...values) => {
    const total = values.reduce((sum, value) => sum + value, 0);
    return total / values.length;
};

const averageCGPA = calculateAverageCGPA(...cgpas);

// Math.max with spread
const highestCGPA = Math.max(...cgpas);

// Default parameter
function getStudentInfo(name, department = "Computer Science") {
    return `${name} belongs to ${department}`;
}

const task1Output = document.getElementById("lab05Task1Output");

task1Output.innerHTML = `
    <div class="card p-4 shadow-sm">
        <h4 class="mb-3">Spread, Rest and ES6 Features</h4>

        <p><strong>Student:</strong> ${student.name}</p>
        <p><strong>Roll Number:</strong> ${student.rollNumber}</p>

        <p>
            <strong>Merged Courses:</strong>
            ${allCourses.join(", ")}
        </p>

        <p>
            <strong>Original Courses:</strong>
            ${allCourses.join(", ")}
        </p>

        <p>
            <strong>Copied Array After Adding Course:</strong>
            ${copiedCourses.join(", ")}
        </p>

        <p>
            <strong>Updated Student:</strong>
            Semester ${updatedStudent.semester},
            CGPA ${updatedStudent.cgpa}
        </p>

        <p>
            <strong>Enrollment:</strong>
            ${enrollStudent(student.name, ...allCourses)}
        </p>

        <p>
            <strong>Average CGPA:</strong>
            ${averageCGPA.toFixed(2)}
        </p>

        <p>
            <strong>Highest CGPA:</strong>
            ${highestCGPA}
        </p>

        <p>
            <strong>Student Info:</strong>
            ${getStudentInfo(student.name)}
        </p>
    </div>
`;


// =========================
// TASK 2: ES6 Modules
// =========================

const students = [
    {
        name: "Sara",
        rollNumber: "BSCS-023",
        assignment: 25,
        midterm: 27,
        finalExam: 30
    },
    {
        name: "Ahmed",
        rollNumber: "BSCS-002",
        assignment: 20,
        midterm: 22,
        finalExam: 25
    },
    {
        name: "Ayesha",
        rollNumber: "BSCS-014",
        assignment: 15,
        midterm: 14,
        finalExam: 19
    },
    {
        name: "Hassan",
        rollNumber: "BSCS-031",
        assignment: 24,
        midterm: 25,
        finalExam: 23
    }
];

let task2HTML = `
    <div class="card p-4 shadow-sm">
        <h4 class="mb-4">${DEPARTMENT_NAME}</h4>

        <div class="row">
`;

students.forEach((student) => {

    const {
        name,
        rollNumber,
        assignment,
        midterm,
        finalExam
    } = student;

    const total = calculateTotal(
        assignment,
        midterm,
        finalExam
    );

    const average = calculateAverage(
        assignment,
        midterm,
        finalExam
    );

    const grade = getGrade(total);
    const status = checkStatus(total);

    const resultText = formatStudentResult(
        name,
        rollNumber,
        total
    );

    task2HTML += `
        <div class="col-md-6 mb-4">
            <div class="card h-100 p-3 border shadow-sm">

                <h5>${name}</h5>

                <p>
                    <strong>Roll Number:</strong>
                    ${rollNumber}
                </p>

                <p>
                    <strong>Assignment:</strong>
                    ${assignment}
                </p>

                <p>
                    <strong>Midterm:</strong>
                    ${midterm}
                </p>

                <p>
                    <strong>Final Exam:</strong>
                    ${finalExam}
                </p>

                <p>
                    <strong>Total:</strong>
                    ${total}
                </p>

                <p>
                    <strong>Average:</strong>
                    ${average.toFixed(2)}
                </p>

                <p>
                    <strong>Grade:</strong>
                    ${grade}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${status}
                </p>

                <small>${resultText}</small>

            </div>
        </div>
    `;
});

task2HTML += `
        </div>
    </div>
`;

document.getElementById("lab05Task2Output").innerHTML = task2HTML;


// =========================
// TASK 3: Online Examination Workflow
// =========================

const task3Output = document.getElementById("lab05Task3Output");

function verifyStudent(roll, callback) {

    setTimeout(() => {

        if (roll === "") {
            callback("Roll number is required", null);
        } else {
            callback(null, `Student ${roll} verified`);
        }

    }, 1000);
}


function loadExamPaper(callback) {

    setTimeout(() => {
        callback("Exam paper loaded");
    }, 1500);
}


function submitAnswers(callback) {

    setTimeout(() => {
        callback("Answers submitted");
    }, 2000);
}


function generateResult(callback) {

    setTimeout(() => {
        callback("Result generated: 82 marks");
    }, 1000);
}


// Nested callbacks can become difficult to manage,
// which is commonly called callback hell.

function startExamWorkflow(roll) {

    task3Output.innerHTML = `
        <div class="alert alert-info">
            <strong>Exam workflow started...</strong>
        </div>
    `;

    verifyStudent(roll, (error, verificationMessage) => {

        if (error) {

            task3Output.innerHTML += `
                <p class="text-danger">
                    <strong>Error:</strong> ${error}
                </p>
            `;

            return;
        }

        task3Output.innerHTML += `
            <p>${verificationMessage}</p>
        `;

        loadExamPaper((paperMessage) => {

            task3Output.innerHTML += `
                <p>${paperMessage}</p>
            `;

            submitAnswers((submitMessage) => {

                task3Output.innerHTML += `
                    <p>${submitMessage}</p>
                `;

                generateResult((resultMessage) => {

                    task3Output.innerHTML += `
                        <p>${resultMessage}</p>

                        <div class="alert alert-success">
                            <strong>Exam completed successfully!</strong>
                        </div>
                    `;
                });
            });
        });
    });
}


document
    .getElementById("lab05StartValidExam")
    .addEventListener("click", () => {
        startExamWorkflow("BSCS-001");
    });


document
    .getElementById("lab05StartInvalidExam")
    .addEventListener("click", () => {
        startExamWorkflow("");
    });


// =========================
// TASK 4: University Result Portal
// =========================

const database = [

    {
        name: "Ali",
        rollNumber: "BSCS-001",
        department: "Computer Science",
        semester: 5,
        assignment: 25,
        midterm: 27,
        finalExam: 30
    },

    {
        name: "Ahmed",
        rollNumber: "BSCS-002",
        department: "Computer Science",
        semester: 5,
        assignment: 20,
        midterm: 22,
        finalExam: 25
    },

    {
        name: "Sara",
        rollNumber: "BSCS-023",
        department: "Computer Science",
        semester: 5,
        assignment: 25,
        midterm: 27,
        finalExam: 30
    },

    {
        name: "Ayesha",
        rollNumber: "BSCS-014",
        department: "Computer Science",
        semester: 5,
        assignment: 15,
        midterm: 14,
        finalExam: 19
    },

    {
        name: "Hassan",
        rollNumber: "BSCS-031",
        department: "Computer Science",
        semester: 5,
        assignment: 24,
        midterm: 25,
        finalExam: 23
    }
];


document.getElementById("lab05DepartmentOutput").innerHTML = `
    <strong>Department:</strong> ${DEPARTMENT_NAME}
`;


// Find student using Promise
function findStudent(rollNumber) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const student = database.find(
                (student) => student.rollNumber === rollNumber
            );

            if (student) {
                resolve(student);
            } else {
                reject("Student not found");
            }

        }, 1000);
    });
}


// Calculate result using Promise
function calculateResult(student) {

    return new Promise((resolve) => {

        setTimeout(() => {

            const {
                assignment,
                midterm,
                finalExam
            } = student;

            const total = calculateTotal(
                assignment,
                midterm,
                finalExam
            );

            const average = calculateAverage(
                assignment,
                midterm,
                finalExam
            );

            const grade = getGrade(total);
            const status = checkStatus(total);

            resolve({
                ...student,
                total,
                average,
                grade,
                status
            });

        }, 1000);
    });
}


// Display single student result
function displayStudentResult(result, output) {

    const {
        name,
        rollNumber,
        department,
        semester,
        total,
        average,
        grade,
        status
    } = result;

    output.innerHTML = `
        <div class="card p-4 shadow-sm">

            <h4>${name}</h4>

            <p>
                <strong>Roll Number:</strong>
                ${rollNumber}
            </p>

            <p>
                <strong>Department:</strong>
                ${department}
            </p>

            <p>
                <strong>Semester:</strong>
                ${semester}
            </p>

            <p>
                <strong>Total Marks:</strong>
                ${total}
            </p>

            <p>
                <strong>Average:</strong>
                ${average.toFixed(2)}
            </p>

            <p>
                <strong>Grade:</strong>
                ${grade}
            </p>

            <p>
                <strong>Status:</strong>
                ${status}
            </p>

        </div>
    `;
}


// Part A: Promise then/catch/finally
function searchUsingPromise(rollNumber) {

    const output = document.getElementById("lab05SearchOutput");
    const status = document.getElementById("lab05SearchStatus");

    output.innerHTML = `
        <div class="alert alert-info">
            Searching using Promise...
        </div>
    `;

    status.innerHTML = "";

    findStudent(rollNumber)

        .then((student) => {
            return calculateResult(student);
        })

        .then((result) => {
            displayStudentResult(result, output);
        })

        .catch((error) => {

            output.innerHTML = `
                <div class="alert alert-danger">
                    ${error}
                </div>
            `;
        })

        .finally(() => {

            status.innerHTML = `
                <small>
                    Promise search operation completed.
                </small>
            `;
        });
}


// Part B: Async/Await
async function showResult(rollNumber) {

    const output = document.getElementById("lab05SearchOutput");
    const status = document.getElementById("lab05SearchStatus");

    output.innerHTML = `
        <div class="alert alert-info">
            Searching using Async/Await...
        </div>
    `;

    status.innerHTML = "";

    try {

        const student = await findStudent(rollNumber);

        const result = await calculateResult(student);

        displayStudentResult(result, output);

    } catch (error) {

        output.innerHTML = `
            <div class="alert alert-danger">
                ${error}
            </div>
        `;

    } finally {

        status.innerHTML = `
            <small>
                Async/Await search operation completed.
            </small>
        `;
    }
}


// Promise Search button
document
    .getElementById("lab05PromiseSearchBtn")
    .addEventListener("click", () => {

        const rollNumber = document
            .getElementById("lab05RollNumberInput")
            .value
            .trim();

        searchUsingPromise(rollNumber);
    });


// Async/Await Search button
document
    .getElementById("lab05SearchStudentBtn")
    .addEventListener("click", () => {

        const rollNumber = document
            .getElementById("lab05RollNumberInput")
            .value
            .trim();

        showResult(rollNumber);
    });


// Part D: Promise.all() and map()
async function loadAllResults() {

    const output = document.getElementById("lab05AllResultsOutput");

    output.innerHTML = `
        <div class="alert alert-info">
            Loading all student results...
        </div>
    `;

    try {

        const resultPromises = database.map((student) => {
            return calculateResult(student);
        });

        const results = await Promise.all(resultPromises);

        let passed = 0;
        let failed = 0;

        let html = `
            <div class="card p-4 shadow-sm">

                <h4 class="mb-4">
                    All Student Results
                </h4>

                <div class="row">
        `;

        results.forEach((result) => {

            const {
                name,
                rollNumber,
                total,
                average,
                grade,
                status
            } = result;

            if (status === "Pass") {
                passed++;
            } else {
                failed++;
            }

            html += `
                <div class="col-md-6 mb-3">

                    <div class="card p-3 h-100">

                        <h5>${name}</h5>

                        <p>
                            <strong>Roll:</strong>
                            ${rollNumber}
                        </p>

                        <p>
                            <strong>Total:</strong>
                            ${total}
                        </p>

                        <p>
                            <strong>Average:</strong>
                            ${average.toFixed(2)}
                        </p>

                        <p>
                            <strong>Grade:</strong>
                            ${grade}
                        </p>

                        <p>
                            <strong>Status:</strong>
                            ${status}
                        </p>

                    </div>

                </div>
            `;
        });

        html += `
                </div>

                <hr>

                <h5>Total Students: ${results.length}</h5>

                <p class="text-success">
                    <strong>Passed:</strong> ${passed}
                </p>

                <p class="text-danger">
                    <strong>Failed:</strong> ${failed}
                </p>

            </div>
        `;

        output.innerHTML = html;

    } catch (error) {

        output.innerHTML = `
            <div class="alert alert-danger">
                ${error}
            </div>
        `;
    }
}


// Load all results button
document
    .getElementById("lab05LoadAllBtn")
    .addEventListener("click", loadAllResults);