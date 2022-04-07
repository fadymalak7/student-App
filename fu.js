const fs = require("fs")

const addStudent = (id, name, degrees) => {

    const student = loadStudent();

    const repeatedId = student.find((ele) => {
        return ele.id == id;
    })

    if (!repeatedId) {
        var sum = 0;
        degrees.forEach((ele) => {
            sum += ele
        })

        var comment;
        if (sum <= 100 && sum >= 90) {
            comment = "Grade A";
        }
        else if (sum < 90 && sum >= 85) {
            comment = "Grade B";
        }
        else if (sum < 84 && sum >= 70) {
            comment = "Grade C"
        }
        else if (sum < 69 && sum >= 50) {
            comment = "Grade D";
        }
        else {
            comment = "Grade F";
        }

        student.push({
            id,
            name,
            degrees,
            sum,
            comment,
        })
        console.log("saved")
        saveStudent(student)
    }
    else {
        console.log("this id is already taken")
    }
}


const removeStudent = (id) => {
    const student = loadStudent();

    const studentToKeep = student.filter((ele) => {

        return ele.id !== id;

    })

    saveStudent(studentToKeep);
}


const readStudent = (id) => {

    const student = loadStudent();

    const read = student.find((ele) => {
        return ele.id == id;
    })

    if (read) {

        console.log(`ID:${read.id}, NAME:${read.name}, DEGREES:${read.degrees}, SUM:${read.sum}, COMMENT:${read.comment}`);
    }
    else {
        console.log("check the id, NO STUDENT HAS FOUND");
    }
}

const listStudents = () => {

    var i = 1;
    const students = loadStudent();

    students.forEach((ele) => {
        console.log(`${i++}- NAME:${ele.name}, TOTAL DEGREES:${ele.sum}, ${ele.comment}`);
    })
}


const loadStudent = () => {

    try {
        const data = fs.readFileSync("student.json");
        return JSON.parse(data)
    }
    catch (e) {
        return [];
    }
}

const saveStudent = (student) => {

    const saved = JSON.stringify(student);
    fs.writeFileSync("student.json", saved);
}





module.exports = {
    addStudent,
    removeStudent,
    readStudent,
    listStudents
}