import React from 'react';
import AssignSubjectRow from './AssignSubjectRow';

function AssignSubject() {

    const content = [
        { class: 'Pre-Nursery' },
        { class: 'L.K.J' },
        { class: 'U.K.J' },
        { class: '1st' },
        { class: '2nd' },
        { class: '3rd' },
        { class: '4th' },
        { class: '5th' },
        { class: '6th' },
        { class: '7th' },
        { class: '8th' },
        { class: '9th' },
        { class: '10th' },
        { class: '11th' },
        { class: '12th' },
    ];

    return (
        <div className=" flex flex-col px-3 mobile:max-tablet:px-0 h-screen overflow-y-auto items-start mt-2  mb-3 no-scrollbar">
            <h1 className="text-2xl p-2">Assign Subject Teacher</h1>
            <div className="border rounded-lg shadow-md w-full flex flex-col px-3 mobile:max-tablet:px-0 overflow-y-auto items-start mt-2 mb-3 no-scrollbar">
                {content.map((con, index) => (
                    <AssignSubjectRow Class={con.class} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default AssignSubject;
