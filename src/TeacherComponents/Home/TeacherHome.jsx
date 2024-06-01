import React from 'react'
import bg from '../../assets/background.png'
import Progress from './utils/Progress'
import Attendence from './utils/Attendence'
import Total from './utils/Total'
import Summary from '../checkin/utils/Summary'
function TeacherHome() {
    return (
        <div className=" flex flex-col px-3 mobile:max-tablet:px-0 h-screen overflow-y-auto items-start mt-2 ml-2 mr-3 mb-3 no-scrollbar">
            <h1 className='text-3xl'>Dashboard</h1>
            <div className='flex items-center justify-between border shadow-md mt-4 rounded-lg  w-full bg-secondary'>
                <h1 className='ml-3 font-medium text-3xl'>Welcome back, <span className='font-semibold text-4xl'>Shailesh</span></h1>
                <img src={bg} alt="teacher-student"></img>
            </div>

            <div className=' h-fit flex items-center justify-between border shadow-md mt-4 rounded-lg  w-full mobile:max-laptop:flex-col'>
                <Progress />
                <Attendence/>
            </div>

            <div className='w-full'>
                <Total />
            </div>

            <div className='w-full  mt-3 rounded-lg border shadow-md'>
                <Summary />
            </div>

        </div>

    )
}

export default TeacherHome