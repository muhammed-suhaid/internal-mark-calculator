const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/internal-mark", (request, response) => {
    const getName = (request.body.name)
    const getAdmissonNo = (request.body.admNo)
    const getSubjectName = (request.body.subjectName)
    const getpresent = parseInt(request.body.present)
    const getTotalDay = parseInt(request.body.totalDay)
    const getExam1Mark = parseInt(request.body.exam1Mark)
    const getExam2Mark = parseInt(request.body.exam2Mark)
    const getAssignment1Mark = parseInt(request.body.assignment1Mark)
    const getAssignment2Mark = parseInt(request.body.assignment2Mark)

    const Attendance = (getpresent / getTotalDay) * 8
    const TotalExamMark = ((getExam1Mark + getExam2Mark) / 80) * 20
    const TotalAssignmentMark = ((getAssignment1Mark + getAssignment2Mark) / 24) * 12
    const TotalInternalMark = Attendance + TotalExamMark + TotalAssignmentMark



    response.json({
        "status": "Internal mark calculated",
        "result": {
            "name": getName,
            "admNo": getAdmissonNo,
            "subjectName": getSubjectName,
            "Attendance": Attendance,
            "TotalExamMark": TotalExamMark,
            "TotalAssignmentMark": TotalAssignmentMark,
            "TotalInternalMark": TotalInternalMark,
        }
    })
})

app.listen(4000, () => {
    console.log("Server is Running <3")
})