import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddDetails = () => {
    const [input, changeInput] = useState({
        "name": "",
        "admNo": "",
        "subjectName": "",
        "present": "",
        "totalDay": "",
        "exam1Mark": "",
        "exam2Mark": "",
        "assignment1Mark": "",
        "assignment2Mark": "",

    })

    const [output, changeOutput] = useState({
        "status": "",
        "result": {
            "name": "",
            "admNo": "",
            "subjectName": "",
            "Attendance": "",
            "TotalExamMark": "",
            "TotalAssignmentMark": "",
            "TotalInternalMark": "40"
        }
    })

    const [isData, changeIsData] = useState(false)

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const fetchData = () => {
        axios.post("http://localhost:4000/internal-mark", input)
            .then((response) => {
                console.log("Response : ", response.data)
                changeOutput(response.data)
                changeIsData(true)
            })
            .catch(() => { console.log("Something went wrong") })
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-5">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Student Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Admission No</label>
                                <input type="text" className="form-control" name="admNo" value={input.admNo} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subject Name</label>
                                <input type="text" className="form-control" name="subjectName" value={input.subjectName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total Day Present</label>
                                <input type="text" className="form-control" name="present" value={input.present} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Total Working Days</label>
                                <input type="text" className="form-control" name="totalDay" value={input.totalDay} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Exam Mark</label>
                                <input type="text" className="form-control" name="exam1Mark" value={input.exam1Mark} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Second Exam Mark</label>
                                <input type="text" className="form-control" name="exam2Mark" value={input.exam2Mark} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Assignment Mark</label>
                                <input type="text" className="form-control" name="assignment1Mark" value={input.assignment1Mark} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Second Assignment Mark</label>
                                <input type="text" className="form-control" name="assignment2Mark" value={input.assignment2Mark} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="button" onClick={fetchData}>SUBMIT</button>
                                </div>
                            </div>
                            {/* Display Card */}
                            {isData &&
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <h5 className="card-title" align="center">Internal Mark Result</h5>
                                            <p className="card-text"><strong>Name:</strong> {output.result.name}</p>
                                            <p className="card-text"><strong>Adm No:</strong> {output.result.admNo}</p>
                                            <p className="card-text"><strong>Subject:</strong> {output.result.subjectName}</p>
                                            <p className="card-text"><strong>Attendance:</strong> {output.result.Attendance}</p>
                                            <p className="card-text"><strong>Exam Mark:</strong> {output.result.TotalExamMark}</p>
                                            <p className="card-text"><strong>Assignment Mark:</strong> {output.result.TotalAssignmentMark}</p>
                                            <hr />
                                            <p className="card-text text-success fw-bold fs-5">
                                                Total Internal Mark: {output.result.TotalInternalMark}
                                            </p>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddDetails