import Dashboard from "./pages/Dashboard.jsx";
import React from "react";
import Home from "./components/Home/Home.jsx";
import AssignmentReport from "./components/assignment_report/assignmentReport.jsx";
import Fee from "./components/fees/fees.jsx";
import Border from "./components/event/border.jsx";
import Profile from "./components/profile/profile.jsx";
import Quiz from "./components/quiz/quiz.jsx";
import Receipt from "./components/receipt/receipt.jsx";
import Result from "./components/Result/Result.jsx";
import DateSheet  from "./components/DateSheet/datesheet.jsx";
import Palyquiz from "./components/playquiz/firstquizs.jsx";
import Attendance from "./components/Attendance/Attendance.jsx";
import TimeTable from "./components/TimeTable/Timetable.jsx";
import SubjectClassWork from "./components/classWork/SubjectClassWork.jsx";
import ClassWork from "./components/classWork/route.jsx";
import TodayClassWork from "./components/classWork/TodayClassWork.jsx";
import Login from "./components/onBoarding/Login/Login.jsx";
import ResetPassword from "./components/onBoarding/ResetPassword/ResetPassword.jsx";
import SetNewPassword from "./components/onBoarding/SetNewPassword/SetNewPassword.jsx";
import AdminDashboard from './AdminComponents/Dashboard.jsx'
import AdminHome from "./AdminComponents/Home/Home.jsx";
import AllStudents from "./AdminComponents/Students/AllStudents/AllStudents.jsx";
import StudentDetailScreen from "./AdminComponents/Students/AllStudents/utils/StudentDetailScreen.jsx";
import { createBrowserRouter } from "react-router-dom";
import StudentsList from "./AdminComponents/Students/AllStudents/utils/StudentsList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/newPassword",
    element: <SetNewPassword />,
  },
  {
    path: "/Student-Dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Student-Dashboard/home",
        element: <Home />,
      },
      {
        path: "/Student-Dashboard/assignment",
        element: <AssignmentReport />,
      },
      {
        path: "/Student-Dashboard/fee-due",
        element: <Fee />,
      },
      {
        path: "/Student-Dashboard/events",
        element: <Border />,
      },
      {
        path: "/Student-Dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/Student-Dashboard/playquiz",
        element: <Palyquiz/>,
      },
      {
        path: "/Student-Dashboard/receipt",
        element: <Receipt/>,
      },
      {
        path: "/Student-Dashboard/quiz/:subject",
        element: <Quiz/>,
      },
      {
        path: "/Student-Dashboard/result",
        element: <Result />,
      },
      {
        path: "/Student-Dashboard/attendance",
        element: <Attendance />,
      },
      {
        path: "/Student-Dashboard/datesheet",
        element: <DateSheet />,
      },
      {
        path: "/Student-Dashboard/timetable",
        element: <TimeTable />,
      },
      {
        path: "/Student-Dashboard/classwork",
        element: <ClassWork />,
        children: [
          {
            path: '',
            element: <TodayClassWork />
          },
          
          {
            path: ':name',
            element: <SubjectClassWork />
          }
        ]
      },
    ],
  },
  {
    path: "/Admin-Dashboard",
    element: <AdminDashboard />,
    children:[
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "/Admin-Dashboard/Students",
        element: <AllStudents />,
        children:[
          {
            path: '',
            element: <StudentsList />
          },
          {
            path: ':id',
            element: <StudentDetailScreen />
          }
        ]
      },
    ]
  }
 
]);

export default router;