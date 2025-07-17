const mongoose = require("mongoose")

const internalMarkSchema = mongoose.Schema(
    {
        name: String,
        admNo: String,
        subjectName: String,
        present: String,
        totalWorkingDay: String,
        exam1Mark: String,
        exam2Mark: String,
        assignment1Mark: String,
        assignment2Mark: String,
        attendance: String,
        totalExamMark: String,
        totalAssignmentMark: String,
        totalInternalMark: String,
    }
)

const internalMarkModel = mongoose.model("internalMarks", internalMarkSchema)
module.exports = internalMarkModel