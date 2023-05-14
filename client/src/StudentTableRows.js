import React from 'react';
import StudentTableCell from './StudentTableCell.js';

//accepts an array of students, then maps each student to its own row with two td cells
function StudentTableRows({ students }) {
    console.log(`Number of students in StudentTableRows: ${students.length}`);
    return (
        <>
            {students.map((s) => {
                let fullName = s.first_name + " " + s.last_name;
                let grade = s.grade;
                let id = s.id;
                let textStyle;
                if (grade >= 85) {
                    textStyle = 'text-success';
                }
                if (grade < 85 && grade >= 65) {
                    textStyle = 'text-body';
                }
                if (grade < 65) {
                    textStyle = 'text-danger';
                }
                return (
                    <tr key={id} className='student-table-row'>
                        <StudentTableCell cellContent={fullName} />
                        <StudentTableCell cellContent={grade} nodeClass={textStyle} />
                    </tr>
                )
            })}
        </>
    )
}

export default StudentTableRows;