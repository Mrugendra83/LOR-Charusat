import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import AdminNavbar from "../components/Navbar/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

import Status from '../views/StudentDashboard/Status/Status'
import DraftStatus from '../views/StudentDashboard/DraftStatus/DraftStatus'
import LorRequest from '../views/StudentDashboard/LorRequest/LorRequest'
import Admission from '../views/StudentDashboard/Admission/Admission'
import Report from '../views/StudentDashboard/Report/Report'

function Student() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-gray-200">
                <AdminNavbar />

                <HeaderStats />
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                <Switch>
                    <Route path="/student/status" exact component={Status} />
                    <Route path="/student/draft-status" exact component={DraftStatus} />
                    <Route path="/student/request" exact component={LorRequest} />
                    <Route path="/student/admission" exact component={Admission} />
                    <Route path="/student/report" exact component={Report} />
                    <Redirect from="/student" to="/student/status" />
                </Switch>
                </div>
            </div>
    </>
    )
}

export default Student
