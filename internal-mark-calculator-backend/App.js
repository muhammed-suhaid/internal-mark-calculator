const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const internalMarkModel = require("./models/internal_mark_model")
const { mongoUrl } = require("./config")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(mongoUrl)

app.post("/internal-mark", (request, response) => {
    // Data requesting from user
    const getName = (request.body.name)
    const getAdmissonNo = (request.body.admNo)
    const getSubjectName = (request.body.subjectName)
    const getpresent = parseInt(request.body.present)
    const getTotalDay = parseInt(request.body.totalDay)
    const getExam1Mark = parseInt(request.body.exam1Mark)
    const getExam2Mark = parseInt(request.body.exam2Mark)
    const getAssignment1Mark = parseInt(request.body.assignment1Mark)
    const getAssignment2Mark = parseInt(request.body.assignment2Mark)

    // Calculating...
    const attendance = (getpresent / getTotalDay) * 8
    const totalExamMark = ((getExam1Mark + getExam2Mark) / 80) * 20
    const totalAssignmentMark = ((getAssignment1Mark + getAssignment2Mark) / 24) * 12
    const totalInternalMark = attendance + totalExamMark + totalAssignmentMark

    // Storing Data
    let data_store = new internalMarkModel(
        {
            name: getName,
            admNo: getAdmissonNo,
            subjectName: getSubjectName,
            present: getpresent,
            totalWorkingDay: getTotalDay,
            exam1Mark: getExam1Mark,
            exam2Mark: getExam2Mark,
            assignment1Mark: getAssignment1Mark,
            assignment2Mark: getAssignment2Mark,
            attendance: attendance,
            totalExamMark: totalExamMark,
            totalAssignmentMark: totalAssignmentMark,
            totalInternalMark: totalInternalMark,
        }
    )
    data_store.save()


    // Response to user
    response.json({
        "status": "Internal mark calculated",
        "result": {
            "name": getName,
            "admNo": getAdmissonNo,
            "subjectName": getSubjectName,
            "Attendance": attendance,
            "TotalExamMark": totalExamMark,
            "TotalAssignmentMark": totalAssignmentMark,
            "TotalInternalMark": totalInternalMark,
        }
    })
})

app.listen(4000, () => {
    console.log("Server is Running <3")
})