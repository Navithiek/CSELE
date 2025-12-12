// ARRAY: This array holds multiple student OBJECTS.
let students = [
    { name: "Anna", grade: 85 },   // Object representing a student
    { name: "Mark", grade: 72 },   // Object representing a student
    { name: "Liam", grade: 91 },   // Object representing a student
    { name: "Ella", grade: 60 }    // Object representing a student
];

// FUNCTION: Declares a function that checks if a grade is passing.
function checkPass(grade) {  
    // CONDITIONAL: Checks if the grade meets the passing requirement.
    if (grade >= 70) {  
        return "Passed";           // Returns "Passed" if grade is 75 or higher
    } else {  
        return "Failed";           // Returns "Failed" if grade is below 75
    }
}

// LOOP: Goes through each student in the array one-by-one.
for (let i = 0; i < students.length; i++) {  
    let student = students[i];                 // VARIABLE: Stores the current student object
    let status = checkPass(student.grade);     // FUNCTION CALL + VARIABLE: Gets pass/fail result
    console.log(student.name + ": " + status); // OUTPUT: Prints name and status
}