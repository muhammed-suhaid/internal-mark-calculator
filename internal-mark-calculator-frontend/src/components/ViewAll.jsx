import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [markData, changeMarkData] = useState(
        {
            "status": "",
            "result": []
        }
    )

    const fetchData = () => {
        axios.post("http://localhost:4000/view-all")
            .then((response) => { changeMarkData(response.data) })
            .catch(() => { console.log("Something went wrong") })
    }

    useEffect(() => { fetchData() }, {})

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Admission No</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Days Presented</th>
                                    <th scope="col">Total Working Days</th>
                                    <th scope="col">Exam 1 Mark</th>
                                    <th scope="col">Exam 2 Mark</th>
                                    <th scope="col">Assignment 1 Mark</th>
                                    <th scope="col">Assignment 2 Mark</th>
                                    <th scope="col">Attendance</th>
                                    <th scope="col">Total Exam Mark</th>
                                    <th scope="col">Total Assignment Mark</th>
                                    <th scope="col">Total Internal Mark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {markData.result.map((data, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.admNo}</td>
                                            <td>{data.subjectName}</td>
                                            <td>{data.present}</td>
                                            <td>{data.totalWorkingDay}</td>
                                            <td>{data.exam1Mark}</td>
                                            <td>{data.exam2Mark}</td>
                                            <td>{data.assignment1Mark}</td>
                                            <td>{data.assignment2Mark}</td>
                                            <td>{data.attendance}</td>
                                            <td>{data.totalExamMark}</td>
                                            <td>{data.totalAssignmentMark}</td>
                                            <td>{data.totalInternalMark}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll