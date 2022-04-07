const yargs = require("yargs");

const student = require("./fu")

yargs.command({
    command: "add",
    describe: "add student file",
    builder: {
        id: {
            describe: "uniqe id for each student",
            type: 'number',
            demandOption: true,
        },
        name: {
            describe: "student name",
            type: "string",
            demandOption: true,
        },
        degrees: {
            describe: "student degrees",
            type: 'array',
            demandOption: true,
        }
    },
    handler: (x) => { student.addStudent(x.id, x.name, x.degrees) }

})


yargs.command({
    command: "remove",
    describe: "remove student file",
    builder: {
        id: {
            describe: "uniqe id for each student",
            type: 'number',
            demandOption: true,
        },

    },

    handler: (x) => { student.removeStudent(x.id,) }

})

yargs.command({
    command: "read",
    describe: "read student file",
    builder: {
        id: {
            describe: "uniqe id for each student",
            type: 'number',
            demandOption: true,
        },

    },

    handler: (x) => { student.readStudent(x.id) }

})


yargs.command({
    command: "list",
    describe: "list all students",
    handler: (x) => { student.listStudents() }
})





console.log(yargs.argv);